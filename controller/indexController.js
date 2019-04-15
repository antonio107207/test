const {saveToDB, getCurrent} = require('../model/dbManager');
const {getDetails} = require('../helpers/getDetailsHelper');
const _ = require('lodash');

async function savePathAction(ctx) {
    await saveToDB(ctx.request.body.path);
    ctx.redirect('/path')
}

async function getDetailsAction(ctx) {
    //-----------------------------------------------------
    const path = await getCurrent();
    //-----------------------------------------------------
    const tree = await getDetails(path[0].name);
    //-----------------------------------------------------
    let viewVariables = {};
    tree.length ? viewVariables = {
        path: path[0].name,
        message: "Details",
        tree,
        _
    } : viewVariables = {
        path: path[0].name,
        message: "The path does not exist or directory is empty",
        tree,
        _
    };
    await ctx.render('index', viewVariables);
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