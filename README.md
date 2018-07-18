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
var stylemod = require('gulp-css-to-polymer');

// Wrap css files
gulp.task("polymerize", () => {
    gulp.src("./src/**/*.css")
        .pipe(stylemod({
            prefix: 'tg-',
            suffix: '-styles'
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
    suffix: '-styles'
}
```

## LICENSE [MIT](LICENSE)
