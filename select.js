var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'glassceiling'
});

connection.connect();

var id = 3;

var user_query = connection.query('SELECT * FROM users WHERE id=' + connection.escape(id), function(err, result){
  if (err) {
    console.error(err);
  } else {
    console.error(result);
  }
});

var comment_query = connection.query('SELECT * FROM comments WHERE user_id=' + connection.escape(id), function(err, result){
  if (err) {
    console.error(err);
  } else {
    console.error(result);
  }
});
