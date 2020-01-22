const UserModel = require("./../database/models/user_model");

// Index for id reference only - not to be in final version
// GET /users
const index = async (req, res, next) => {
  const users = await UserModel.find();
  res.send(users);
};

// POST /register
const create = async (req, res, next) => {
  const { email, password, username, isAdmin } = req.body;
  const user = await UserModel.create({
    email,
    password,
    username,
    isAdmin
  });
  res.send("Creation worked");
};

// GET /users/:id/edit
const edit = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json(user);
}

// PUT /users/:id
const update = async (req, res, next) => {
  let { _id } = req.params;
  let { email, password, username, isAdmin } = req.body;
  await UserModel.findByIdAndUpdate(_id, {
    email,
    password,
    username,
    isAdmin
  });
  res.send("Edit successful");
};

// DELETE users/:id
const deleteUser = async (req, res, next) => {
  let { _id } = req.params;
  await UserModel.findByIdAndRemove(_id);
  res.send("User removed successfully");
};

module.exports = {
  // newUser is React only
  // newUser,
  create,
  edit,
  update,
  deleteUser,
  index
};
