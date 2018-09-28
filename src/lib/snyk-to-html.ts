#!/usr/bin/env node

import Handlebars = require('handlebars');
import path = require('path');

import {Hbars} from './hbars';
import {loadSource} from './loader';

import Viz = require('viz.js');
import { Module, render } from 'viz.js/full.render.js';

import graphlib = require('graphlib');

const severityMap = {low: 0, medium: 1, high: 2};

const viz = new Viz({ Module, render });

export class SnykToHtml {
  public static run(dataSource: string, hbsTemplate: string, reportCallback: (value: string) => void): void {
    SnykToHtml
      .runAsync(dataSource, hbsTemplate)
      .then(reportCallback)
      .catch(console.log);
  }

  public static async runAsync(source: string, template: string): Promise<string> {
    const report = loadSource(source)
      .then(JSON.parse)
      .then(data => processData(data, template));
    return report;
  }
}

function metadataForVuln(vuln: any) {
  return {
    type: vuln.type || 'vulnerability',
    id: vuln.id,
    title: vuln.title,
    name: vuln.name,
    info: vuln.info || 'No information available.',
    severity: vuln.severity,
    severityValue: severityMap[vuln.severity],
    description: vuln.description || 'No description available.',
    isLicense: (vuln.type === 'license'),
    packageManager: vuln.packageManager,
    introductions: [],
    introducedThru: '',
    graph: '',
  };
}

function mkGraph(vulns): string {
  const nodes: Set<string> = new Set();
  const edges: Set<string> = new Set();
  let prev: string | null = null;

  const slug = (s: string) => s.replace(/\-/g, '').replace(/\@/g, '').replace(/\:/g, '').replace(/\./g, '');
  const mkLabel = (s: string) => s.replace(/\@/g, '\\n@').replace(/\:/g, ':\\n');

  vulns.map(v => {
    prev = 'root';
    v.from.slice(1).map(entry => {
      nodes.add(entry);
      if (prev) {
        if (prev === 'root') {
          edges.add(`root -> ${slug(entry)} [arrowhead=none]`);
        } else {
          edges.add(`${slug(prev)} -> ${slug(entry)}`);
        }
      }
      prev = entry;
    });
  });

  const header = [
    'digraph G {',
    '  rankdir=LR;',
    '  root [shape=point];',
    '  fontsize=10;',
    '  fontname="helvetica";',
    '  margin=0.5;',
    ];
  const nodelines = Array.from(nodes).map(n => `  ${slug(n)} [margin=1 shape=plain label="${mkLabel(n)}"]`);
  const edgelines = Array.from(edges).map(e => `  ${e} [penwidth=.5 arrowsize=.5]`);
  const footer = ['}'];
  const output = header.concat(nodelines).concat(edgelines).concat(footer);
  const outputText = output.join('\n');
  return outputText;
}

function groupVulns(data) {
  const vulns = data.vulnerabilities;
  const results = {};
  if (!vulns || typeof vulns.length === 'undefined') {
    return results;
  }
  vulns.map( vuln => {
    if (!results[vuln.id]) {
      results[vuln.id] = {list: [vuln], metadata: metadataForVuln(vuln)};
    } else {
      results[vuln.id].list.push(vuln);
    }
  });
  Object.keys(results).forEach(k => {
    const r = results[k];
    const introductions = r.list.map(v => v.from[1]);
    const uniqIntroductions = Array.from(new Set(introductions));
    if (!r.metadata.packageManager) {
      r.metadata.packageManager = data.packageManager;
    }
    r.metadata.introductions = uniqIntroductions;
    switch (uniqIntroductions.length) {
      case 1:
        r.metadata.introducedThru = `${uniqIntroductions[0]}`;
        break;
      case 2:
        r.metadata.introducedThru = `${uniqIntroductions[0]} and ${uniqIntroductions[1]}`;
        break;
      default:
        r.metadata.introducedThru = `${uniqIntroductions[0]}, ${uniqIntroductions[1]}, and others`;
        break;
    }
    viz.renderString(mkGraph(r.list), {engine: 'dot'})
    .then(svg => {
      r.metadata.graph = svg;
    });
    // r.metadata.graph = mkGraph(r.list);
  });
  return results;
}

declare global {
  interface Array<T> {
    sumOf(fn: (T) => number | undefined): T[];
  }
}

Array.prototype.sumOf = function(fn: (x) => number | undefined) {
  return this.reduce((acc, item) => acc + fn(item) || 0, 0);
};

function mergeData(dataArray: any[]): any {
  dataArray.forEach(d => {
    const pm = d.packageManager;
    d.vulnerabilities.forEach(v => v.packageManager = pm);
  });
  const vulnsArrays = dataArray.map(d => d.vulnerabilities || []);
  const aggregateVulnerabilities = [].concat(...vulnsArrays);

  const totalUniqueCount = dataArray.sumOf(i => i.uniqueCount);
  const totalDepCount = dataArray.sumOf(x => x.dependencyCount);
  const paths = dataArray.map(d => d.path);

  return {
    vulnerabilities: aggregateVulnerabilities,
    uniqueCount: totalUniqueCount,
    summary: `${aggregateVulnerabilities.length} vulnerable dependency paths`,
    dependencyCount: totalDepCount,
    paths,
  };
}

async function processData(data: any, template: string): Promise<string> {
  const mergedData = Array.isArray(data) ? mergeData(data) : data;
  mergedData.vulnerabilities = groupVulns(mergedData);
  const hbars = new Hbars(template);
  return hbars.renderMaster(mergedData);
}
