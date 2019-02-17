import React from "react";
import App from "./Components/App"
import CalendarDate from './Components/CalendarDate'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './Components/Sidebar'
import {  connect } from "react-redux";
import  {addItem} from './index'
import Today from "./Components/Today";

class RouterNew extends React.Component {


  constructor(props) {

    props.onAdd();
    super(props)
    this.state = { "allData": [] }
}


render(){
  if(this.props.items!=={})
  //this.setourState();
    console.log( this.props.today)
 const defaultStyle={
 
  color: "white",
  fontSize:"25px"

}
  return (
    <div style={{backgroundColor:"#99bbff"}}>
    <Router >
    <div >
        <ul>
          <li>
            <Link style={defaultStyle} to={{pathname:"/"}}>Now</Link>
          </li>
          <li>
            <Link style={defaultStyle} to={{pathname:"/Today"}}>Today</Link>
          </li>
          <li>
            <Link style={defaultStyle} to={{pathname:"/AllDate"}}>Date</Link>
          </li>
        </ul>
       
        <Route exact path="/" name="app" component={App} />
        <Route path="/Today" component={Today} />
        <Route path="/AllDate" component={CalendarDate} />
        
        </div>
    </Router>
    <Sidebar data={this.props.items}/>
    <div id="footer"></div>
    </div>
  );
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
    onAdd: () => {
      dispatch(addItem())
      
    }
  };
};

//container components
export default connect(mapStateToProps, mapDispatchToProps)(
    RouterNew
);
