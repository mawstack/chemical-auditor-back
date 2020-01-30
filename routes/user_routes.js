const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const passport = require("passport");
const { isAdminCheck } = require("./../middleware/is_admin_check");

// Index for id reference only - not to be in final version
/* 24/01 -- Can we explain what the above comment is? Just want to ensure we're not missing a route! */

router.get("/", UserController.index);

// Actual final version express routes;
router.post("/register", celebrate({
        [Segments.BODY]: {
            email: Joi.string().required(),
            password: Joi.string().required(),
            username: Joi.string().required(),
            isAdmin: Joi.boolean().required()
        }
    }),
    UserController.create
);

router.delete("/:id",
    passport.authenticate("jwt", {
        failureRedirect: "/users/register", session: false
    }),
    isAdminCheck,
    UserController.deleteUser
);

router.get("/:id/edit",
    passport.authenticate("jwt", {
        failureRedirect: "/users/register", session: false
    }),
    isAdminCheck,
    UserController.edit
);

router.put("/:id", 
    passport.authenticate("jwt", {
        failureRedirect: "/users/register", session: false
    }),
    isAdminCheck,
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().required(),
            password: Joi.string().required(),
            username: Joi.string().required(),
            isAdmin: Joi.boolean().required()
        }
    }),
    UserController.update
);

router.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  passport.authenticate("local", {
    failureRedirect: "/login",
    session: false
  }),
  AuthenticationController.loginCreate
);

router.get("/logout", AuthenticationController.logout);

module.exports = router;
