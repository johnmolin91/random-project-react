const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.playersadvanced
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

// db.playersadvanced.findAll( {limit: 10 }).then(function(dbNames) {
//     console.log(dbNames);
// })