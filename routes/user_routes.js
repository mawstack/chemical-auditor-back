const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");

// React only
// router.get("/register", UserController.newUser);

// Index for id reference only - not to be in final version
router.get("/", UserController.index);
router.post("/register", UserController.registerCreate);
router.delete("/:id", UserController.deleteUser);
router.get("/:id/edit", UserController.edit);
router.put("/:id", UserController.update);

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
