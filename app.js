require("dotenv").config();
const passport = require("passport");
require("./config/passport");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const app = express();

//app
app.use(passport.initialize());
app.use(passport.session());

//cors - currently accepting requests from ANY origin
//Allowing all origins - 2/2
app.use(cors({
  //(Allow all origins)
  origin: function(origin, callback){
    return callback(null, true);
  },
  credentials: true
}));

//mongoose
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(require("./routes"));

module.exports = app;