const router = require('koa-router')();
const {homePageAction, savePathAction, getDetailsAction} = require('../controller/indexController');

router
    .get('/', homePageAction)
    //.get('/files', getDetailsAction)
    .post('/files', getDetailsAction)
    .all('**', async (ctx) => {
        ctx.body = 'Page not found';
        ctx.redirect('/');
    });

module.exports = router.routes();
