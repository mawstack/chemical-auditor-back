const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

// GET /register for React only

// Index for id reference only - NOT to be in final version
// GET /users
const index = async (req, res, next) => {
  const users = await UserModel.find();
  res.send(users);
};

// POST /register
const create = async (req, res, next) => {
  const { email, password, username, isAdmin } = req.body;
  //must change mongoose request post-action to non-promise logic?
  await UserModel.create({
    email,
    password,
    username,
    isAdmin
  })
  .then(() => {
    res.send("hit");
    //hitting "hit" but not below - problem with promise structure or jwt section???
    //line 23 error - UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    const token = jwt.sign({ subject: req.user._id }, process.env.JWT_KEY);
    res.cookie("jwtToken", token);
    res.send("Register Successful, logging in...");
  })
  .catch((err) => res.send(err));
};

// GET /users/:id/edit
const edit = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user);
}

// PUT /users/:id
const update = async (req, res, next) => {
  let { email, password, username, isAdmin } = req.body;
  await UserModel.findByIdAndUpdate(req.params.id, {
    email,
    password,
    username,
    isAdmin
  });
  res.send("Edit successful");
};

// DELETE users/:id
const deleteUser = async (req, res, next) => {
  await UserModel.findByIdAndRemove(req.params.id);
  res.send("User removed successfully");
};

module.exports = {
  create,
  edit,
  update,
  deleteUser,
  index
};
