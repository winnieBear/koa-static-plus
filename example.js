
'use strict';

const serve = require('./');
const koa = require('koa');
const app = koa();

// $ GET /static/package.json
// $ GET /static/foo.html

app.use(serve('.', {
  pathPrefix: '/static'
}));

app.use(async function (ctx, next){
    ctx.body = 'Hello World'
})

app.listen(3000);

console.log('listening on port 3000');