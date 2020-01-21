const express = require("express");
const router = express.Router();
const EntryController = require("./../controllers/entry_controller");

router.get("/", EntryController.index)
// We need some logic to be entered, ensuring that if user is not logged in they are automatically sent to the login page.

module.exports = router;
