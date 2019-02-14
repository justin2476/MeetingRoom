const mongoose = require('mongoose');
//var schema = mongoose.Schema;
var url = "mongodb://localhost:27017/mydb";
mongoose.connect(url , { useNewUrlParser: true }, (err)=>{console.log('mongodbConnected '+err)} );