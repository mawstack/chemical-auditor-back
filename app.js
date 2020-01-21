const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//general app
const app = express();
require("dotenv").config();
const port = process.env.PORT;

//mongoose
//need to set 'localhost' area dynamically?
mongoose.connect("mongodb://localhost/chemical_auditor", {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));

//method-override
app.use(methodOverride("_method", { methods: ["POST", "GET"]}));

//body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//routes
//tentative test route (not in routes/ directory yet)
app.get("/", (req, res) => {
    res.status(201).send("Express Test");
})
// const routes = require("./routes");
// app.use(routes);

//listening for app
app.listen(port, () => {
    console.log(`Express server is now running on port ${port}.`);
})

const 恩田