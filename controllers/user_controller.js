const UserModel = require("./../database/models/user_model");
// CHANGE ALL TO FAT ARROW BOYS
//GET /register ((JUST IN REACT))

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
// async function update (req, res) {
//     //change the specified user in the DB then redirect to dashboard
// }

// //DELETE users/:id
// async function deleteUser (req, res) {
//     //delete the specified user from the DB then redirect to dashboard
// }

module.exports = {
    // newUser,
    create
    // edit,
    // update,
    // deleteUser
}