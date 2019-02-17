//pass start and end date
function CheckBooking(doc){
let stat = true;
var status="Okk";
let today=new Date();
if (doc) {
    var start = new Date(doc[1])
    var end = new Date(doc[2]);
    if (doc[0])
        doc[0].forEach(element => {
           // console.log(element)
            var s = new Date(element.startTime)
            var e = new Date(element.endTime)
              
 if ((s < start&&start <e )||(s < end&&end <e) ) 
                       { stat = false;
                        status="Already Booked";
                       }
                        else if(start<today||end<today||start>end){
                           stat = false;
                           status="Please Check the date"
                        }
//console.log(s+"<"+start+"<"+e)
//console.log(s+"<"+end+"<"+e)
        });
}
return [stat,status]
}
export default CheckBooking