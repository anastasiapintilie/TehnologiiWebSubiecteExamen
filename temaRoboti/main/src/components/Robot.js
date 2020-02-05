import React, { Component } from 'react'
import RobotForm from "./RobotForm"
class Robot extends Component {
  
   constructor(props)
    {
        super(props)
        this.state=
        {
            isEditing:false,
            name: this.props.name,
            type:this.props.type,
            mass:this.props.mass
        }
    }
  
  render() {
  	let {item} = this.props
    return (
      <div>
  		Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
      </div>
    )
  }
}

export default Robot
