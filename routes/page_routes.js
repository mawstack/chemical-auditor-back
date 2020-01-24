const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");

router.get("/home", PageController.dashboard);

module.exports = router;