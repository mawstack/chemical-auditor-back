const express = require("express");
const router = express.Router();
const AuthenticationController = require("./../controllers/authentication_controller");
const { celebrate, Joi, Segments } = require("celebrate");
const passport = require("passport");

// GET /login for React only

router.post("/login",
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
router.post("/logout", AuthenticationController.logout);

module.exports = router;