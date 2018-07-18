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
    // string / function to be used for file names. Can be either a fixed string or a function
    // that takes a [vinyl](https://github.com/gulpjs/vinyl) file object and returns a string
    filename: function(file) {
        return path.basename(file.path, path.extname(file.path)) + "-styles";
    },
    // string / function to be used for module ids. Can be either a fixed string or a function
    // that takes a [vinyl](https://github.com/gulpjs/vinyl) file object and returns a string
    moduleId: function(file) {
        return path.basename(file.path, path.extname(file.path)) + "-styles";
    }
}
```

## LICENSE [MIT](LICENSE)
