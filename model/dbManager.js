const {execute} = require('../helpers/dbConnect');

async function saveToDB (dir, file, id) {
    const save = `INSERT INTO pathes (directory, file, parent) VALUES ("${dir}", "${file}", "${id || 0}")`;
    return await execute(save)
}

async function getFromDB(id){
    const select = `WITH RECURSIVE temp_table (id, directory, file, parent) AS 
    (SELECT id, directory, file, parent
    FROM pathes WHERE parent = "${id}"
    UNION ALL    
    select p.id, p.directory, p.file, p.parent
    FROM pathes AS p
    JOIN temp_table t ON p.parent = t.id)
    SELECT * FROM temp_table;`;
    return await execute(select);
}

async function clearDB(){
    const clear = `TRUNCATE TABLE pathes;`;
    return await execute(clear);
}

module.exports={saveToDB, getFromDB, clearDB};