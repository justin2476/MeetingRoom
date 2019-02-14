//pass start and end date
function CheckBooking(doc){
let stat = true;

if (doc) {
    var start = new Date(doc[1])
    var end = new Date(doc[2]);
    if (doc[0])
        doc[0].forEach(element => {
           // console.log(element)
            var s = new Date(element.startTime)
            var e = new Date(element.endTime)
              
 if ((s < start&&start <e )||(s < end&&end <e) ) 
                        stat = false;
//console.log(s+"<"+start+"<"+e)
//console.log(s+"<"+end+"<"+e)
        });
}
return stat
}
export default CheckBooking