
// originally forked from https://github.com/reykjavikingur/node-handlebars-directory
// under the terms of the ISC licence:

// Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby
// granted, provided that the above copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING
// ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL,
// DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
// WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE
// USE OR PERFORMANCE OF THIS SOFTWARE.

import assert = require('assert');
import Handlebars = require('handlebars');
import FileTree = require('web-template-file-tree');

export function HandlebarsDirectory(path, extension, options?) {
  assert(Boolean(path), 'missing required argument for directory path');
  assert(Boolean(extension), 'missing required argument for file extension');
  if (!options) {
    options = {};
  }
  const handlebars = options.handlebars || Handlebars;
  const loadDirectory = HandlebarsDirectoryLoader(path, extension, handlebars);

  return (filePath, data) => {
    return loadDirectory()
      .then((hbs) => {
        return hbs.compile('{{>' + filePath + '}}')(data);
      });
  };
}

function HandlebarsDirectoryLoader(path, extension, handlebars) {
  assert(Boolean(handlebars), 'missing required argument for handlebars');
  const loaded = false;
  const loadFileTree = FileTreeLoader(path, extension);
  return () => {
    if (loaded) {
      return Promise.resolve(handlebars);
    } else {
      return loadFileTree()
        .then((fileTree) => {
          registerFileTree(handlebars, fileTree);
          return handlebars;
        });
    }
  };
}

function FileTreeLoader(path, extension) {
  const fileTree = new FileTree(path, {extension});
  const fileTreeLoaded = false;
  return () => {
    return new Promise((resolve, reject) => {
      if (fileTreeLoaded) {
        resolve(fileTree);
      } else {
        fileTree.load((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(fileTree);
          }
        });
      }
    });
  };
}

function registerFileTree(handlebars, fileTree) {
  for (const path in fileTree.cache) {
    if (path) {
      handlebars.registerPartial(path, fileTree.cache[path]);
    }
  }
}
