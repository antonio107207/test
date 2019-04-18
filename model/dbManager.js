const {execute} = require('../helpers/dbConnect');

async function saveToDB (dir, file) {
    const save = `INSERT INTO pathes (directory, file) VALUES ("${dir}", "${file || ''}")`;
    return await execute(save)
}

async function getCurrent(){
    const select = `SELECT directory FROM pathes ORDER BY id DESC LIMIT 1`;
    return await execute(select)
}

module.exports={saveToDB, getCurrent};