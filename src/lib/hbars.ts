import Handlebars = require('handlebars');
import HandlebarsDirectory = require('handlebars-directory');
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

// handlebar helpers
const hh = {
  markdown: (md) => marked(md.replace(/\n##/g, '\n§§\n##'))
                    .replace(/id="/g, 'class="markdown ')
                    .split('<p>§§</p>')
                    .map(x => `<div>${x}</div>`)
                    .join(''),
  moment: (date, format) => moment.utc(date).format(format),
  dump: (data, spacer) => JSON.stringify(data, null, spacer || null),
};

Object.keys(hh).forEach(k => Handlebars.registerHelper(k, hh[k]));
