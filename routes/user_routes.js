const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");

router.get("/register", UserController.newUser);
router.post("/register", UserController.create);
router.get("/:_id/edit", UserController.edit);
router.post("/:_id", UserController.update);
router.delete("/:_id", UserController.deleteUser);

module.exports = router;