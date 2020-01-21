const UserModel = require("./../database/models/user_model");

//GET /register
function newUser (req, res) {
    //display the new User React view
}

//POST /register
async function create (req, res) {
    //create user in db using data from form-post request body
    //then redirect to dashboard AND pass token to login

    //!!Add return test for postman - 21/01 1:14PM
}

//GET /users/:id/edit
function edit (req, res) {
    //display the edit User React view
}

//PUT /users/:id
async function update (req, res) {
    //change the specified user in the DB then redirect to dashboard
}

//DELETE users/:id
async function deleteUser (req, res) {
    //delete the specified user from the DB then redirect to dashboard
}

module.exports = {
    newUser,
    create,
    edit,
    update,
    deleteUser
}