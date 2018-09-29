import Handlebars = require('handlebars');
import {HandlebarsDirectory} from './handlebars-directory';

import marked = require('marked');
import moment = require('moment');
import path = require('path');

export class Hbars {
  private readonly templateDir: string;
  private readonly masterTemplateName: string;
  private readonly renderView;

  constructor(public masterTemplateFile: string) {
    this.templateDir = path.dirname(masterTemplateFile);
    this.masterTemplateName = path.basename(masterTemplateFile, '.hbs');
    this.renderView = HandlebarsDirectory(this.templateDir, 'hbs');
  }

  public async render(template: string, data: any): Promise<string> {
    return this.renderView(template, data);
  }

  public async renderMaster(data: any): Promise<string> {
    return this.render(this.masterTemplateName, data);
  }
}

// Our details markdown for a vuln consists of a series of H2 section headers
// alternating between some number of paragraphs denoting section content.
//
// `marked` will render this by translating the header name to an `id` attribute
// (which is bad, as it results in multiple duplicate IDs)
//
// This function changes that behaviour by wrapping the entirety of each
// section (including the header) in a `div` element and changing the `id`
// attribute into a `class` attribute - also adding the `markdown` class.
//
// A subsequent client-side transform defined in inline-script.hbs will then
// lift this class attribute to the surrounding div, allowing for entire
// selections to be hidden/revealed in script based on that css class.
function remarked(md: string): string {
  return marked(md.replace(/\n##/g, '\n§§\n##'))
    .replace(/id="/g, 'class="markdown ')
    .split('<p>§§</p>')
    .map(x => `<div>${x}</div>`)
    .join('');
}
// handlebar helpers
const hh = {
  markdown: remarked,
  moment: (date, format) => moment.utc(date).format(format),
  dump: (data, spacer) => JSON.stringify(data, null, spacer || null),
};

Object.keys(hh).forEach(k => Handlebars.registerHelper(k, hh[k]));
