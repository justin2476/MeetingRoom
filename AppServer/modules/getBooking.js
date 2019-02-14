
var Booking=require('../model/Booking');
async function getBooking(ObjQuerry) {
    return new Promise((resolve,reject)=>{
    var obj = {};
    if (ObjQuerry.userName)
        obj.userName = ObjQuerry.userName;
    if (ObjQuerry.startTime) {
        var start = ObjQuerry.startTime;
        obj.startTime = { $gt: new Date(start) };
    }
    if (ObjQuerry.endTime) {
        var end = ObjQuerry.endTime;
        obj.endTime = { $lt: new Date(end) };
    }
    Booking.find(obj).exec(function (err, doc) {
        if (err)
            reject(err);
        resolve(doc);
    });
})

}
module.exports={'getBooking':getBooking}
