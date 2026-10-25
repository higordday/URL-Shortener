
const mysql = require('mysql2');

let database_connection = mysql.createConnection
({

    host     :                        process.env.DATABASE_SERVER_HOST,
    port     :                        process.env.DATABASE_SERVER_PORT,
    user     : process.env.DATABASE_AUTHENTICATION_CREDENTIAL_USERNAME,
    password : process.env.DATABASE_AUTHENTICATION_CREDENTIAL_PASSWORD,
    database :                               process.env.DATABASE_NAME

});

database_connection.connect();

module.exports = database_connection;