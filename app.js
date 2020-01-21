const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

//general app
const app = express();

//mongoose
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    newUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));

//method-override
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//body-parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//routes
app.use(require("./routes"));

module.exports = app;
