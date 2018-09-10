const express = require('express');
const mysql      = require('mysql');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root',
  database : 'nbaplayerstats18adv'
});

app.get('/players', function (req, res) {
  console.log(req);
  connection.query('select * FROM playersadvanced LIMIT 10', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});


// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/players to see stats');
});