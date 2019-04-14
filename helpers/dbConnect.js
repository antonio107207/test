const mysql = require('mysql2/promise');

const connectionPromise = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anna2010',
    database: 'routes'
});

async function execute(sql, bindings) {
    const connection = await connectionPromise;
    const [rows] = await connection.execute(sql, bindings);
    return rows;
}

module.exports = {
    execute
};


