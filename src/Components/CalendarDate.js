import React from 'react'
import Calendar from 'react-calendar';
import CalendarData from './CalendarData';
import {  connect } from "react-redux";
import  {addDate} from '../index'
class CalendarDate extends React.Component {
  state = {
    date: new Date()
  }

  onChange = (date) => { this.props.addDate(date) }

  render() {
    let doc = this.props.items;
    if (doc) {
        return (
          <div className="image">
            <section className="section">
              <Calendar
                className='center'
                onChange={this.onChange}
                value={this.state.date}
              />

            </section>

            <CalendarData  />
          </div>
        )
    }
    else
      return (
        <div>
          <h1>Click one of tab above</h1>
          
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

const mapDispatchToProps = dispatch => {
  return {
    addDate:(date) => {
      dispatch(addDate(date))
      
    }
  };
};

//container components
export default connect(mapStateToProps, mapDispatchToProps)(
  CalendarDate
);
