import React from 'react';
import CalendarData from './CalendarData';
import {connect} from 'react-redux';
import {addDate} from '../index'
class Today extends React.Component
{
    constructor(props)
    {
        super(props)
    var date=new Date();
    props.addDate(date);
    }
    render()
    {
return(
<div className="image" style={{backgroundColor: "#C7FCE5",height:"550px"}}>
<CalendarData />

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
    Today
  );
  