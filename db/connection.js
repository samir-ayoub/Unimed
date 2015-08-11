mysql = require('mysql');
connectionString = 'mysql://root:@localhost/unimed';

db = function(){}
db.cnn = function(){};
db.cnn.exec = function(query, callback) {
  var connection = mysql.createConnection(connectionString);
  connection.query(query, function(err, rows) {
    callback(rows, err);
    connection.end();
  });
};

module.exports = db.cnn;