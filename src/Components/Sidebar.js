import React from 'react'
import BookNow from './BookNow';

class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            'click': false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ click: true })

    }

    render() {
        console.log("From Footer" + this.props.data[0])
        const divStyle = {
            padding: 20,
            position: "fixed",
            bottom: "20px",
            right: "20px"
        };
        const newStyle = {
            padding: "20px",
            width: "20%",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "5px",
            backgroundColor: "rgba(76, 175, 80, 0.3)"
        }
        if (!this.state.click)
            return (
                <div style={divStyle}>
                    <button style={{ color: "white" }} onClick={this.handleClick}>Book Now</button>
                </div>
            )
        else
            return (
                <div style={newStyle}>
                    < BookNow data={this.props.data} />
                </div>
            )
    }
}
export default Sidebar