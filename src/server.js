var express=require('express');
var body_parser=require('body_parser');
var request=require('request').defaults({json:true});
var app=express();
var App= require('./App');
app.post('/App',App.test);
var server=app.listen(3000,function(){
    var host="127.0.01";
    var port="3000";
    console.log("App is listening at http://%s:%s\n",host,port);
});


