const router = require("express").Router();
const playersController = require("../../controllers/playersController");

router.route("/")
    .post(playersController.findAll);

module.exports = router;