const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portofolio_db',
});

db.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }else {
    console.log('Connected to the database');
  }
});

module.exports = db;

    