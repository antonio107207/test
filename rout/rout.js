const router = require('koa-router')();
const {homePageAction, savePathAction, getDetailsAction} = require('../controller/indexController');

router
    .get('/', homePageAction)
    .get('/path', getDetailsAction)
    .post('/save', savePathAction)
    .all('**', async (ctx) => {
        ctx.body = 'Page not found';
        ctx.redirect('/');
    });

module.exports = router.routes();
