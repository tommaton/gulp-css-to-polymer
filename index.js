const through = require('through2');
const path = require('path');
const gutil = require('gulp-util');

const PLUGIN_NAME = 'gulp-css-to-polymer';

function generateModuleName(options, file) {
    return `${options.prefix}${path.basename(file.path, path.extname(file.path))}${options.suffix}`;
}

module.exports = opts => through.obj((file, enc, cb) => {
    const fileObj = file;

    if (file.isStream()) {
        return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }
    if (file.isNull()) {
        return cb(null, file);
    }

    const moduleId = generateModuleName(opts, file);
    const dirname = path.dirname(file.path);

    const res = `import '@polymer/polymer/polymer-element';

    const $_documentContainer = document.createElement('template');
    $_documentContainer.innerHTML = \`<dom-module id=${moduleId}>
        <template>
            <style>
            ${file.contents.toString('utf8')}
            </style>
        </template>
    </dom-module>\`;

    document.head.appendChild($_documentContainer.content);`;

    fileObj.contents = Buffer.from(res);
    fileObj.path = `${path.join(dirname, moduleId)}.js`;

    return cb(null, file);
});
