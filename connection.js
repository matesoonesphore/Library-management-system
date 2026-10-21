const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'l4sodb',
  port: '3306'
}
);

const sql = 'SELECT * FROM modules';
connection.query(sql, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});