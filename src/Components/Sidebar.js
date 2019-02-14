import React from 'react'
import BookNow from './BookNow';

class Sidebar extends React.Component{
    constructor(){
        super()
        this.state={
            'click':false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick()
    {
        this.setState({click:true})
      
    }
    
    render(){
       console.log("From Footer"+ this.props.data[0])
        const divStyle = {
            padding: 20
          };
    if(!this.state.click)
    return (
        <div style={divStyle}>
   <button style={{color:"white"}}onClick={this.handleClick}>Book Now</button>
   </div>
   )
   else
   return    < BookNow data={this.props.data}/>

}
}
export default Sidebar