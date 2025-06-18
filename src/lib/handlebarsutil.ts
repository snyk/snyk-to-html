import * as Handlebars from 'handlebars';

import { firstInitial, formatDate } from './codeutil';

export function registerHandlebarsHelpers() {
  Handlebars.registerHelper('formatDate', formatDate);
  Handlebars.registerHelper('firstInitial', firstInitial);
}
