const fs = require('fs');
const {saveToDB} = require('../model/dbManager');

const getDetails =  async (dir, file, id) => {
    file = file || [];
    let files;
    if(fs.statSync(dir).isDirectory()) {
        let newId = await saveToDB(dir.split('/').reverse()[0], file, id);
        id = newId.insertId;
        try {
            files = fs.readdirSync(dir);
        } catch (error) {
            console.error(error)
        }
        for (const index in files) {
            const name = dir + '/' + files[index];
            try {
                if (fs.statSync(name).isDirectory()) {
                    await saveToDB(dir.split('/').reverse()[0], files[index], id);
                    await getDetails(name, file, id);
                } else {
                   await saveToDB(dir.split('/').reverse()[0], files[index], id);
                }
            } catch (error) {
                return error;
            }
        }
    }
};

module.exports = {getDetails};