const jwt = require("jsonwebtoken");

// 'Logging in' by creating a JWT token - signing it with the declared req.user._id and the set JWT encryption key
// Note: JWT tokens are NOT secure for password storage (easily decrypted) - only to protect against cookie-change session hacking
// POST /login
const loginCreate = (req, res) => {
  try {
    const token = jwt.sign({ subject: req.user._id }, process.env.JWT_KEY, {
      expiresIn: "10d"
    });
    res.cookie("jwtToken", token , { sameSite: "None", secure: true });
    res.send(`${req.user.username} has logged in.`);
  } catch (err) {
    res.send(err);
  }
};

// Logout - activate request logout function + set current token to defunct via aging
// POST /logout
const logout = (req, res) => {
  try {
    res.send(`${req.user.username} has logged out.`);
    req.logout();
    res.cookie("jwtToken", null, { maxAge: -1 });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  loginCreate,
  logout
};
