
function formatDate(date) {
    date=new Date(date)
    if(date instanceof Date){
    var currentTime = date;
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    date = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        
        var year = date.getFullYear(),
            month = date.getMonth() + 1, // months are zero indexed
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
            minuteFormatted = minute < 10 ? "0" + minute : minute,
            morning = hour < 12 ? "am" : "pm";
    if(month<10)
    month='0'+month;
        return  day + "-" + month + "-" + year + " " + hourFormatted + ":" +
                minuteFormatted + morning;
    }
    else
    {
        return 
    }
    }
    export default formatDate