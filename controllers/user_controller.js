const UserModel = require("./../database/models/user_model");

//GET /register
function newUser (req, res) {
    //display the new User React view
    
    // example route response - verified working 21/01 2PM
    // res.json({
    //     thing: "a"
    // })
}

//POST /register
async function create (req, res) {
    //create user in db using data from form-post request body
    //then redirect to dashboard AND pass token to login
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