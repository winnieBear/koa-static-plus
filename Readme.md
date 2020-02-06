# koa-static-plus

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

 Koa static file serving middleware, a modify of koa-static

## Installation

```bash
$ npm install koa-static-plus
```

## API

*TOTALLY compatible to koa-static*

## Additional Options

- `pathPrefix` (string), Static path prefix string.
 - `maxage` Browser cache max-age in milliseconds. defaults to 0
 - `hidden` Allow transfer of hidden files. defaults to false
 - `index` Default file name, defaults to 'index.html'
 - `defer` If true, serves after `return next()`, allowing any downstream middleware to respond first.
 - `gzip`  Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
 - `br`  Try to serve the brotli version of a file automatically when brotli is supported by a client and if the requested file with .br extension exists (note, that brotli is only accepted over https). defaults to true.
 - [setHeaders](https://github.com/koajs/send#setheaders) Function to set custom headers on response.
 - `extensions` Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to `false`)

## Example

```js
import koaStaticPlus from 'koa-static-plus'
// ... app = koa()

app.use(koaStaticPlus(path.join(__dirname, '../public'), {
  pathPrefix: '/static'
})

// $ GET /static/hello.txt
// will to send the file ../public/hello.txt
```

## Author

    @Ling.(wssgcg1213)

## Liscense

    MIT

[npm-image]: https://img.shields.io/npm/v/koa-static-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-static-plus
[travis-image]: https://img.shields.io/travis/wssgcg1213/koa-static-plus.svg?style=flat-square
[travis-url]: https://travis-ci.org/wssgcg1213/koa-static-plus
[license-image]: http://img.shields.io/npm/l/koa-static.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-static-plus.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-static-plus