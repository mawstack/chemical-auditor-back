const express = require("express");
const router = express.Router();
const EntryController = require("./../controllers/entry_controller");

router.get("/", EntryController.index);
router.get("/new", EntryController.newEntry);
router.post("/", EntryController.create);
router.get("/:id", EntryController.show);
router.delete("/:id", EntryController.deleteEntry);
router.get("/:id/edit", EntryController.edit);
router.put("/:id", EntryController.update);

module.exports = router;
