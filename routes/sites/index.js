const router = require("express").Router();
const siteRoutes = require("./sites");

// Book routes
router.use("/sites", siteRoutes);

module.exports = router;
