const UserModel = require("./../database/models/user_model");

//Middleware to be invoked after passport-jwt "logged-in" check in Routes - before passing to Controller functions
const isAdminCheck = async (req, res, next) => {
    const user = await UserModel.findById(req.user._id);
    if(user.isAdmin) {
        console.log("User confirmed as admin - loading controller function");
        next();
    } else {
        console.log("User not an admin - redirecting to dashboard...");
        res.redirect("/");
    }
}

module.exports = {
    isAdminCheck
}