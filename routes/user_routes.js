const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");
const { celebrate, Joi, errors, Segments } = require("celebrate");

// React only
// router.get("/register", UserController.newUser);

// Index for id reference only - not to be in final version
router.get("/", UserController.index);
router.post("/register", celebrate({
    [Segments.BODY]: {
        email: Joi.string().required(),
        password: Joi.string().required(),
        username: Joi.string().required(),
        isAdmin: Joi.boolean().required()
    }
}), UserController.create);
router.delete("/:id", UserController.deleteUser);
router.get("/:id/edit", UserController.edit);
router.put("/:id", UserController.update);

module.exports = router;
