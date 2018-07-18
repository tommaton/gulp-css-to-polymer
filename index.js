'use strict';

const through = require('through2');
const path = require('path');
const gutil = require('gulp-util');
const PLUGIN_NAME = 'gulp-css-to-polymer';

module.exports = (opts) => {

    return through.obj(function (file, enc, cb) {

        if (file.isStream()) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }
        if (file.isNull()) {
            return cb(null, file);
        }

        const moduleId = generateModuleName(opts, file);
        const dirname = path.dirname(file.path);

        const res = `import '@polymer/polymer/polymer-element.js';

        const $_documentContainer = document.createElement('template');
        $_documentContainer.innerHTML = \`<dom-module id=${moduleId}><template><style>${file.contents.toString('utf8')}</style></template></dom-module>\` `;

        file.contents = new Buffer(res);
        file.path = path.join(dirname, moduleId) + '.js';

        return cb(null, file);
    });

};

function generateModuleName (options, file) {
    return `${options.prefix}${path.basename(file.path, path.extname(file.path))}${options.suffix}`;
}