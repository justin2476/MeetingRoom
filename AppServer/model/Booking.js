const mongoose = require('mongoose');
const schema = mongoose.Schema;
ObjectId = schema.ObjectId;
const booking = new schema({
    _id: ObjectId,
    userName: String,
    startTime: Date,
    endTime: Date,
    status: Boolean,
    purpose: String,
    createdDate:Date
})
module.exports = mongoose.model("Booking", booking, "Booking");