var express = require("express");
var app = express();

let mongoose = require('mongoose');
var app = express();

app.use(express.json())
var user = require('./routes/user');


app.use('/users', user)

const PORT = process.env.PORT || 6000
app.listen(PORT, (err) => err ? console.log(err) : console.log("Server is running " + PORT))


