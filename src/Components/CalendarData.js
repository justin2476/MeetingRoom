import React from 'react'
import formatDate from '../functions/formatDate'
import {  connect } from "react-redux";
class CalendarData extends React.Component {
   capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
    render() {
        let doc = this.props.items;


        if (doc) {
            var start = new Date()
            start = new Date(this.props.today);
            start.setHours(0, 0, 0, 0)
            var end = new Date(this.props.today);
            end.setHours(23, 59, 59, 0)
            console.log(start+"<"+end)
            let today = []
            let freeStart=start;
            let freeSlotEnd=start;
            let freeEnd=end;
            if (this.props.items)
            this.props.items.forEach(element => {
                    var s = new Date(element.startTime)
                    var e = new Date(element.endTime)
                    if (s > start && e < end) {
                        freeSlotEnd=s;
                        
                        console.log(freeSlotEnd-freeStart)

                        if((freeSlotEnd-freeStart)>=600000)
                        today.push(
                            <div className="content" key={element._id+'free'}>
                              Slot is Free from {formatDate(freeStart).slice(10)+" to "+formatDate(freeSlotEnd).slice(10)} 
                            </div>
                        )
                        freeStart=e;
                        today.push(
                            <div className="content" key={element._id}>
                                User:{" "+ this.capital_letter(element.userName)}<br/>
                                From:{" "+formatDate(element.startTime)}<br/>
                                To :{" "+formatDate(element.endTime)}<br/>
                            </div>
                        )

                    
                      

                    }
                });
                today.push(
                    <div className="content" key={'end'+'free'}>
                      Slot is Free from {formatDate(freeStart).slice(10)+" to "+formatDate(freeEnd).slice(10)} 
                    </div>
                )
            return (
                <div className='body'>
                    <div id="scrollStyle">
                        {(today.length === 0) ? (<h1 style={{margin:"189px 0px 200px 0px"}}>No Bookings yet</h1>) : (<div style={{width:"95%"}}><h1 style={{ textAlign: "left"}}>Bookings till now</h1> {today}</div>)}
                    </div>
                </div>
            )

        }

        return (
            <div >
                <h1 >Click one of tab above</h1>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      items: state.data,
      today:state.today
    };
  };

  
  //container components
  export default connect(mapStateToProps)(
    CalendarData
  );