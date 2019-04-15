const {execute} = require('../helpers/dbConnect');

async function saveToDB (rout) {
    const save = `INSERT INTO pathes (name) VALUES ("${rout}")`;
    return await execute(save)
}

async function getCurrent(){
    const select = `SELECT name FROM pathes ORDER BY id DESC LIMIT 1`;
    return await execute(select)
}

module.exports={saveToDB, getCurrent};