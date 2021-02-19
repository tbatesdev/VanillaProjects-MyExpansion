var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ed",
  password: "72TzQLt90"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE my_database_from_node", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
