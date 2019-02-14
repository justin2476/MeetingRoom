var express = require('express')
var bodyParser=require('body-parser')
var mongoose = require('mongoose');
var Promise=require('promise')
var Booking=require('./model/Booking');
var connection=require('./config/connection');
var saveBooking=require('./modules/saveBooking');
var getBooking=require('./modules/getBooking');
var app = express()
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/bookDetails',async (req,res)=>{
    var ObjQuerry= req.query;
    //you can query without any variable or with any of following variables
    /*
    =====================
    userName:string
    startTime:Date
    endTime:Date
    =====================
    */

    var result=await getBooking.getBooking(ObjQuerry);
    res.send(result);
})
app.post('/bookNow', function (req, res) {
    //pass date as string use JSON.stringify(date);
    /* variable required in req.body are
    ========================
    userName : String  (Mandatory)
    startTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
    endTime : Date - (Mandatory and Should be date string use JSON.stringify(date))
    purpose : String - (Not Mandatory)
    ========================
    */
    var data=req.body;
    var result= saveBooking.saveBooking(data);
    res.send(result)
  })
  var port =4000;
app.listen(port,()=>{
    console.log("Server created at port : "+port);
})

