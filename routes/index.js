const express = require("express");
const router = express.Router();
const userRoutes = require("./user_routes");
const entryRoutes = require("./entry_routes");
const authenticationRoutes = require("./authentication_routes");
const pageRoutes = require("./page_routes");
const passport = require("passport");

// Passport JWT strategy (logged-in check) applied in user_routes.js directly, as it does not apply to the /register route
router.use("/users", userRoutes);

router.use("/entries", passport.authenticate("jwt", {
        failureRedirect: "/users/register",
        session: false
    }),
    entryRoutes
);

// Passport JWT strategy (logged-in check) does not apply to login/logout of authenticationRoutes
router.use("/", authenticationRoutes);
router.use("/", passport.authenticate("jwt", {
        failureRedirect: "/users/register",
        session: false
    }),
    pageRoutes
);

module.exports = router;

/* Chemical Auditor API - Routes reference
- CUD Users
- CRUD Entries
- RU Reports(?)

Users
GET /users/register - New user (view) (REACT ONLY - NO EXPRESS LOGIC REQUIRED)
POST /users/register - Create user
GET /users/:id/edit - Edit user (view) (admin only) (logged in)
PUT /users/:id - Update user (admin only) (logged in)
DELETE /users/:id - Destroy user (admin only) (logged in)

Entries
GET /entries - Index of all entries (view) (logged in)
GET /entries/new - New entry (view) (logged in)
POST /entries - Create entry (logged in)
GET /entries/:id - Show entry (view) (logged in)
DELETE /entries/:id - Destroy entry (admin only) (logged in)
GET /entries/:id/edit - Edit entry (view) (admin only) (logged in)
PUT /entries/:id - Update entry (admin only) (logged in)

Authentication
GET /login - Login (view) (REACT ONLY - NO EXPRESS LOGIC REQUIRED)
POST /login - Login
POST /logout - Logout

Pages
GET / - dashboard (view) (logged in)

Notes
- All users can see all entries
- Regular users can only modify (not delete) their own created entries
- Admin users can modify (and delete) all entries
- Admin users can modify (and delete) users
- Report CRUD left for later - 21/01
*/
