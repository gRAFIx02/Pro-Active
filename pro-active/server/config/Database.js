import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQL_raf0",
    database: "pro_active"
    
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db authorized: ' + db.authorized);

  
});

export default db;