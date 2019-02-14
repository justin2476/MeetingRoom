import React from 'react'
import axios from 'axios'
 import CheckBooking from '../functions/CheckBooked'
class BookNow extends React.Component{
    constructor() {
        super()
        this.state = { 
            "userName": "",
            "purpose": "",
            "startTime": "",
            "endTime": ""
         }

         this.handleChange = this.handleChange.bind(this)
         this.postHandler=this.postHandler.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
      //  console.log(this.state)
    }
    postHandler(){
        if(this.props.data)
      { 
        let stat= CheckBooking([this.props.data,this.state.startTime,this.state.endTime])  
      // console.log(stat)
       //alert(this.props.data[0])
        if(stat)
       { axios.post('http://localhost:4000/bookNow', {
                    "userName": this.state.userName,
                    "startTime": this.state.startTime,
                    "endTime":this.state.endTime,
                    "purpose":this.state.purpose
                })
      .then(res => {
        console.log(res);
        alert(res.data);
        if(res.data==="No issue")
        alert("Booked Successfully")
        else
        alert("Booking data Issue")
      })}
      else
      {
          alert("Already Booked")
      }}
      else
      {
          alert("Data is loading")
      }
    }
    render() {
        const divStyle = {
            padding: 20
          };
    return (
        <form style={divStyle} onSubmit={this.postHandler} >  
               UserName:<input 
                               type="text" 
                               name="userName" 
                               value={this.state.userName}
                               placeholder="User Name" 
                               onChange={this.handleChange} 
                           /> 
                           <br/>
                       Start:{'_____'}<input 
                               type="datetime-local" 
                               name="startTime"
                               value={this.state.startTime}
                               onChange={this.handleChange}
                           /> 
               <br/>
              End:{'______'}<input 
                               type="datetime-local" 
                               name="endTime" 
                               value={this.state.endTime}
                               onChange={this.handleChange} 
                               
                           /> 
               <br/>
             Reason:{'___'}<input 
                               type="text" 
                               name="purpose" 
                               value={this.state.purpose}
                               placeholder="Purpose" 
                               onChange={this.handleChange} 
                           /> 
                           <br/>
                           <button>Submit</button>
               </form >   
    )
    }

}

export default BookNow