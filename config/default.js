require('dotenv').config();

module.exports = {
        "db": {
            "createConn": {
                "host": "localhost",
                "user": "root",
                "password": `${process.env.DB_PASS}`,
                "database": "routes"
            }
        }
};