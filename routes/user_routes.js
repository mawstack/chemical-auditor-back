const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const passport = require("passport");
//passport imported into each local_routes file and applied to designated routes within
//router.get("/name", passport.authenticate("strategyName, {session: false}"), ControllerName.routeFuction)

// GET /register for React only

// Index for id reference only - not to be in final version
router.get("/", UserController.index);

// Actual final version express routes;
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
