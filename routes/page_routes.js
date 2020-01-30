const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");

router.get("/dashboard", PageController.dashboard);

module.exports = router;