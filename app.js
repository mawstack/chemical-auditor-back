const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//port = get from .env? - TENTATIVE explicit port set below
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(201).send("Express Test");
})

app.listen(port, () => {
    console.log(`Express is now running on port ${port}.`);
})