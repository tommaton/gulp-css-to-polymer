# gulp-css-to-polymer

A gulp plugin for wrapping css files into ES6 modules as used by [Polymer](http://polymer-project.org)

## Install

### npm

```sh
$ npm install --save-dev gulp-css-to-polymer
```

### yarn

```sh
$ yarn add gulp-css-to-polymer
```

## Examples

```js
const polymerizeCSS = require('gulp-css-to-polymer');

// Wrap css files
gulp.task("polymerize", () => {
    gulp.src("./src/**/*.css")
        .pipe(polymerizeCSS({
            prefix: 'tg-',
            suffix: '-styles',
            pwa: true
        }))
        .pipe(gulp.dest("./dist"));
}

```

## Options / Defaults

```js
{
    // string to be used for the beginning of the file name & module ids.
    prefix: 'tg-',
    // string to be used for the end of the file name & module ids.
    suffix: '-styles',
    // boolean, determines how the styles are generated as differentate between Polymer and Polymer PWA
    pwa: true // default is false,
}
```

## LICENSE [MIT](LICENSE)
