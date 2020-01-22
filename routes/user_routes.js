const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");

// React only
// router.get("/register", UserController.newUser);

// Index for id reference only - not to be in final version
router.get("/", UserController.index);
router.post("/register", UserController.create);
router.delete("/:id", UserController.deleteUser);
router.get("/:id/edit", UserController.edit);
router.put("/:id", UserController.update);

module.exports = router;
