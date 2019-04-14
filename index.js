const Koa = require('koa');
const app = new Koa();
const routes = require('./rout/rout');
const render = require('koa-ejs');
const path = require('path');
const bodyParser = require('koa-bodyparser');

render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
});

app.use(bodyParser());
app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});