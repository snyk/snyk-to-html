const Handlebars = require('handlebars');
import { firstInitial, formatDate } from './lib/codeutil';

export function registerHandlebarsHelpers() {
  Handlebars.registerHelper('firstInitial', firstInitial);
  Handlebars.registerHelper('formatDate', formatDate);
}
