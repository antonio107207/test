const router = require('koa-router')();
const {savePathAction} = require('../controller/indexController');

router
    .get('/', savePathAction)
    .post('/', savePathAction);

module.exports = router.routes();
