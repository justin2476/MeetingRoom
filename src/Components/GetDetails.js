import React, { Component } from 'react';
import './App.css';
import PrintDetails from './PrintDetails'
import formatDate from '../functions/formatDate'
import {  connect } from "react-redux";
class GetDetails extends Component {

       
    render() {
        if(this.props.items!==[{}])
        if (this.props.items.length !== 0) {

            let nowBooked = null;
            let tillDate = null;
            this.props.items.forEach(function (bookings) {
                let date = new Date();
                let start = new Date(bookings.startTime);
                let end = new Date(bookings.endTime);
                if (start < date && end > date) {
                    nowBooked = bookings
                }
                else if (start > date) {
                    tillDate = ' till ' + formatDate( bookings.startTime);
                }

            })
            if (nowBooked)
                return (
                    <PrintDetails arrayNew={nowBooked} />
                )
            return (
                <div id="first">
                <h1 style={{textAlign: "center"}}>Slot is free{tillDate}</h1>
               </div> 
            )

        }

        return  <h1>Click one of tab above</h1>
        
    }
}

const mapStateToProps = state => {
    return {
      items: state.data
    };
  };
  
  
  //container components
  export default connect(mapStateToProps)(
    GetDetails
  );
  