const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'library_db',
    port:3306
});

const insert = 'INSERT INTO books(book_id, title, author, category, quantity) VALUES(?,?,?,?,?)';
const VALUES = [ ,"WEB DEVELOPMENT","Dr.Eraste","website development",120,];[ ,"WEB DEVELOPMENT","Dr.Eraste","website development",120];
connection.query(insert, VALUES, (wrong, right) =>{
    if (wrong) {
        console.log("The query isn't okay", wrong);
    }else{
        console.log("The query is okay!!", right);
        connection.query('SELECT * FROM books',(Y, B) => {
            console.table(B);
        });
        
    }
});
