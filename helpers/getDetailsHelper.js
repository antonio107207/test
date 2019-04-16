const fs = require('fs');

const getDetails =  (dir, file) => {
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
            if (fs.statSync(name).isDirectory()) {
                getDetails(name, file);
            } else {
                file.push(name);
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