const db = require("../models");

db.playersadvanced.findAll( {limit: 10 }).then(function(dbNames) {
    console.log(dbNames);
})