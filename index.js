var express = require("express");
var exec = require("child_process").exec;
var path = require("path");
var app = express();
var router  = express.Router();
app.use('/',router);



app.listen(process.env.PORT || 3000,()=>{})