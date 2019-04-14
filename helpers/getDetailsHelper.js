const fs = require('fs');

const getDetails =  (dir, file, link) => {
    link = link || [];
    file = file || [];
    let files;
    try{
    files = fs.readdirSync(dir);
    } catch (error) {
       console.error(error)
    }
    for (const index in files) {
        const name = dir + '/' + files[index];
        try{
            if (fs.lstatSync(name).isDirectory()) {
                getDetails(name, file, link);
            } else if (fs.lstatSync(name).isFile()){
                file.push(name);
            } else if (fs.lstatSync(name).isSymbolicLink()){
                link.push(name);
            } else {
                console.log('Unknown data type!');
            }
        } catch (error) {
            return error;
        }
    }
    return file;
};

// async function getPath(data) {
//     const road = data.split('/');
//     let currentRoad = '/';
//     let roads = [];
//     for (let index = 0; index < road.length; index++) {
//         currentRoad = currentRoad === '/' ? currentRoad + road[index] : currentRoad + '/' + road[index];
//         roads.push(currentRoad);
//     }
//     return roads;
// }

module.exports = {getDetails};