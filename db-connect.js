import mysql from "mysql2"; // using mysql2 - installed npm library
import "dotenv/config";

// using the variables from the .env file
// and creates the connection to database
const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true
});

// exports database connection
export default dbConnection;
