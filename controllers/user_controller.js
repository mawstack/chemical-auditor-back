const UserModel = require("./../database/models/user_model");
// CHANGE ALL TO FAT ARROW BOYS
//GET /register ((JUST IN REACT))

//for development reference only to get params of users
const index = async (req, res, next) => {
    

    const users = await UserModel.find();

    res.send(users);
}

//POST /register

//create user in db using data from form-post request body
//then redirect to dashboard AND pass token to login

const create = async (req, res, next) => {
    const { email, password, username, isAdmin } = req.body;

    const user = await UserModel.create({
        email,
        password,
        username,
        isAdmin
    });

    res.send("Creation worked");
}

// //GET /users/:id/edit
// const edit = (req, res) => {
//     //returns user data for "EditUser" React view
// }

// //PUT /users/:id
const update = async (req, res, next) => {
    const { email, password, username, isAdmin } = req.body;

    const user = await UserModel.update({
        email,
        password,
        username,
        isAdmin
    });

    res.send("Edit successful");
}

// //DELETE users/:id

// const deleteUser = async (req, res) => {
//     // Delete the specified user from the DB, then redirect to dashboard.
// }

const deleteUser = async (req, res, next) => {
    const { email, password, username, isAdmin } = req.body;

    const user = await UserModel.delete({
        email,
        password,
        username,
        isAdmin
    });

    res.send("User removed successfully");

}

module.exports = {
    // newUser,
    create,
    // edit,
    update,
    deleteUser,
    index
}