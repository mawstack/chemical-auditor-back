const express = require("express");
const router = express.Router();
const userRoutes = require("./user_routes");
const entryRoutes = require("./entry_routes");

router.use("/users", userRoutes);
router.use("/entries", entryRoutes);
module.exports = router;

/* Chemical Auditor API - Routes reference
- CUD Users
- CRUD Entries
- RU Reports(?)

Users
GET /users/register - New user (view) (REACT ONLY - NO EXPRESS LOGIC REQUIRED)
POST /users/register - Create user
GET /users/:id/edit - Edit user (view)
PUT /users/:id - Update user
DELETE /users/:id - Destroy user

Entries
GET /entries - Index of all entries (view)
GET /entries/new - New entry (view)
POST /entries - Create entry
GET /entries/:id - Show entry (view)
DELETE /entries/:id - Destroy entry
GET /entries/:id/edit - Edit entry (view)
PUT /entries/:id - Update entry

Authentication
GET /login - Login (view) (REACT ONLY - NO EXPRESS LOGIC REQUIRED)
POST /login - Login
POST /logout - Logout

Pages
GET / - dashboard (view)

Notes
- All users can see all entries
- Regular users can only modify (not delete) their own created entries
- Admin users can modify (and delete) all entries
- Admin users can modify (and delete) users
- Report CRUD left for later - 21/01
*/
