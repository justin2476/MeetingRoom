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
        var statusArray=CheckBooking([this.props.data,this.state.startTime,this.state.endTime])  
        let stat= statusArray[0]
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
        if(res.data==="No issue")
        alert("Booked Successfully")
        else
        alert("Booking data Issue")
      })}
      else
      {
          alert(statusArray[1])
      }}
      else
      {
          alert("Data is loading")
      }
    }
    render() {
        // const divStyle = {
        //     padding: "20px"
        //   };
    return (
        <form onSubmit={this.postHandler} >  
               <label>User Name </label><br/>
               
               <input 
                               type="text" 
                               name="userName" 
                               value={this.state.userName}
                               placeholder="User Name" 
                               onChange={this.handleChange} 
                           /> 
                           <br/>
                       <label>Start Time</label><br/><input 
                               type="datetime-local" 
                               name="startTime"
                               value={this.state.startTime}
                               onChange={this.handleChange}
                           /> 
               <br/>
               <label>End Time</label><br/> <input 
                               type="datetime-local" 
                               name="endTime" 
                               value={this.state.endTime}
                               onChange={this.handleChange} 
                               
                           /> 
               <br/>
             <label>Reason</label>
             <br/><input 
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