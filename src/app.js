const Koa = require('koa')
const app = new Koa()

app.use(require('koa-bodyparser'))

app.use(require('./routes'))

module.exports = app
