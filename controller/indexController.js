const {getDetails} = require('../helpers/getDetailsHelper');
const _ = require('lodash');

async function savePathAction(ctx) {
    await getDetails(ctx.request.body.path);
    ctx.redirect('/')
}

async function getDetailsAction(ctx) {
    const tree = await getDetails(ctx.request.body.path);
    console.log('tree', tree);
    ctx.redirect('/')
}

async function homePageAction(ctx){
    const viewVariables = {
        path: '',
        message: '',
        tree: '',
        _
    };
    await ctx.render('homePage', viewVariables);
}

module.exports = {homePageAction, savePathAction, getDetailsAction};