const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.playersadvanced.findAll()
        .then(function(dbplayersadvanced) {
            console.log(dbplayersadvanced);
            var hbsObject = { playersadvanced: dbplayersadvanced };
            return res.render("index", hbsObject);
        });
});

// db.playersadvanced.findAll( {limit: 10 }).then(function(dbNames) {
//     console.log(dbNames);
// })

module.exports = router;