const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

const loginCreate = async (req, res) => {
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
  res.cookie("jwt", token);
  res.send("Login success");
}

const logout = (req, res) => {
  req.logout();
  res.cookie("jwt", null, { maxAge: -1 });
  res.send("Logout success");
}

module.exports = {
  registerCreate,
  loginCreate,
  logout
}