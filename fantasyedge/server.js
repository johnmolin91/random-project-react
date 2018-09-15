const express = require('express');
const db = require("./models");
const routes = require("./routes/api/players");
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql2.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root',
  database : 'nbaplayerstats18adv'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port ", PORT);
  });
});

console.log(module.exports);












// const connection = mysql.createConnection({
//   host     : 'localhost',
//   port     : 3306,
//   user     : 'root',
//   password : 'root',
//   database : 'nbaplayerstats18adv'
// });

// app.get('/players', function (req, res) {
//   console.log(req);
//   connection.query("SELECT Player, (MP/G)*(USGP)*(PER/4 + TSP/3 + 3PAR/4 + FTR/4 + TRBP/3 + ASTP/3 + STLP/4 + BLKP/4 - TOVP/4) + 100*(OWS + DWS/2 + WS + WS48) + 20*(OBPM + DBPM/2 + BPM + VORP) AS rawAdv FROM playersadvanced ORDER BY rawAdv DESC LIMIT 50", function (error, results, fields) {
//     if (error) throw error;
//     res.send(JSON.stringify(results));
//   });
// });


// // Start the server
// app.listen(3000, () => {
//  console.log('Go to http://localhost:3000/players to see stats');
// });