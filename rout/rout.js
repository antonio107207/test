const router = require('koa-router')();
const {homePageAction, getFilesAction, showFilesAction} = require('../controller/indexController');

router
    .get('/', homePageAction)
    .get('/show', showFilesAction)
    .post('/files', getFilesAction)
    .all('**', async (ctx) => {
        ctx.body = 'Page not found';
        ctx.redirect('/');
    });

module.exports = router.routes();
