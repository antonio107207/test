const {getDetails, showDetails} = require('../helpers/getDetailsHelper');
const _ = require('lodash');

async function showFilesAction(ctx) {
    const data = await showDetails(1);
    const viewVariables = {
        path: '',
        message: '',
        tree: data,
        _
    };
    console.log(data);
    await ctx.render('index',viewVariables)
}

async function getFilesAction(ctx) {
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

module.exports = {homePageAction, getFilesAction, showFilesAction};