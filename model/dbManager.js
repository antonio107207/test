const {execute} = require('../helpers/dbConnect');

async function saveToDB (rout) {
    console.log(rout);
    const save = `INSERT INTO pathes (name) VALUES ("${rout}")`;
    return await execute(save)
}

async function getCurrent(rout){
    const select = `SELECT * FROM pathes WHERE name = "${rout}"`;
    return await execute(select)
}

module.exports={saveToDB, getCurrent};