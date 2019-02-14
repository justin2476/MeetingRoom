
var Booking=require('../model/Booking');

var mongoose = require('mongoose');
var saveBooking=function (data) {
    var responseData="No issue";
    if (data) {

        if (data.userName && data.startTime && data.endTime) {
            var obj = {};
            obj._id = mongoose.Types.ObjectId();
            var startTime = new Date(data.startTime);
            var endTime = new Date(data.endTime);
            var currentTime = new Date();
            obj.userName = data.userName;
            obj.startTime = startTime;
            obj.endTime = endTime;
            obj.status = true;
            obj.createdDate = currentTime;
            if (data.purpose)
                obj.purpose = data.purpose;
            else
                obj.purpose = "Meeting";
           
            var book = new Booking(obj);
            book.save((err, result) => {
                if(err)
                console.log("error in saving "+err)
                else
                {
                console.log("Data Saved for user " + result.userName)
            }
        });
        
        }
        else {
            responseData="Incorrect Data";
            console.log("Mandatory Fields are not fill");
        }
    }

    return responseData;
}
module.exports={'saveBooking':saveBooking}
