var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ed",
  password: "72TzQLt90"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
