const router = require("express").Router();
const playersRoutes = require("./players");

// Players routes
router.use("/players", playersRoutes);

module.exports = router;
