const fs = require('fs');
const {saveToDB} = require('../model/dbManager');

const getDetails =  (dir, file) => {
    file = file || [];
    saveToDB(dir);
    console.log('dir', dir);
    let files;
    try{
    files = fs.readdirSync(dir);
    } catch (error) {
       console.error(error)
    }
    for (const index in files) {
        const name = dir + '/' + files[index];
        try{
            if (fs.statSync(name).isDirectory()) {
                getDetails(name, file);
            } else {
                saveToDB (dir, files[index]);
                file.push(files[index]);
            }
        } catch (error) {
            return error;
        }
    }
};

module.exports = {getDetails};