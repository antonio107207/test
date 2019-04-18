const {getDetails} = require('../helpers/getDetailsHelper');
const {clearDB, getFromDB} = require('../model/dbManager');
const _ = require('lodash');

async function showFilesAction(ctx) {
    const data = await getFromDB(1);
    // const value = _.keyBy(data, ({parent}) => parent);
    // const keys = Object.keys(value);
    //
    // console.log(
    //     keys.forEach(key => {
    //         console.log(`Directory ${key}`);
    //     data.forEach(value=>{
    //     if(value.parent == key){
    //         console.log(`file ${value.file}`);
    //     }
    // })}));
    const viewVariables = {
        tree: data,
        _
    };
    await ctx.render('index',viewVariables)
}

async function getFilesAction(ctx) {
    await clearDB();
    await getDetails(ctx.request.body.path);
    ctx.redirect('/')
}

async function homePageAction(ctx){
    const viewVariables = {
        tree: '',
        _
    };
    await ctx.render('homePage', viewVariables);
}

module.exports = {homePageAction, getFilesAction, showFilesAction};