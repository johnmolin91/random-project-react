// const router = require("express").Router();
const Players = require("../../controllers/playersController");

module.exports = function(app) {
    app.get("/api/players", function(req, res) {
        Players.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    })
}





// // Matches with "/api/players"
// router.route("/")
//     .post(playersController.findAll);

// module.exports = router;