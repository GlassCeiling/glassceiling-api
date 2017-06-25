var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'glassceiling'
});

connection.connect();

var comment = {
  body: "This is a comment",
  user_id: 3
};

var query = connection.query('INSERT INTO comments SET ?', comment, function(err, result){
  if (err) {
    console.error(err);
    return;
  } else {
    console.error(result);
  }
});
