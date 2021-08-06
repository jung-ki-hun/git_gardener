var express = require("express");
var exec = require("child_process").exec;
var path = require("path");
var fs = require("fs");
var ds = require('./ds');
var cs = require('./cs');
var app = express();
var router  = express.Router();
app.use('/',router);



app.listen(process.env.PORT || 3000,()=>{
    console.log('start');
    //ds.set_time_start();    
    cs.git_start(1);
})