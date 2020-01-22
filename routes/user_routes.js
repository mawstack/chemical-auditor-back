const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");

// router.get("/register", UserController.newUser); React.js only
router.get("/",UserController.index);

router.post("/register", UserController.create);
// router.get("/:_id/edit", UserController.edit);
router.put("/:_id", UserController.update);
router.delete("/:_id", UserController.deleteUser);

module.exports = router;