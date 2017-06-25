var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'glassceiling'
});

connection.connect();

var user = {
  fname: "Andrea",
  lname: "Santarlasci",
  email: "andrea@gmail.com"
};

var query = connection.query('insert into users set ?', user, function(err, result){
  if (err) {
    console.error(err);
    return;
  } else {
    console.error(result);
  }
});
