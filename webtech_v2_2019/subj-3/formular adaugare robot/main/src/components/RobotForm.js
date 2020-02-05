import React, { Component } from 'react'

class RobotForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isEditing:false,
            type:'',
            name:'',
            mass:''
        }
        
         this.handleChange=(evt) =>{
            this.setState({[evt.target.name]: evt.target.value})            
        }
        
         this.add=(robot)=>{
            this.store.addRobot(robot);
            
        }
    }
    
  render() {
  	let {item} = this.props
    return (
      <div>
  	    <form>
  	    <input type="text" name="name" id="name" value="name" onChange={this.handleChange}/>
  	    <input type="text" name="mass" id="mass" value="mass" onChange={this.handleChange}/>
  	    <input type="text" name="type" id="type" value="type" onChange={this.handleChange}/>
  	    <input type="button" value="add" onClick={()=>{this.props.onAdd({
                            name:this.state.name,
                            type:this.state.type,
                            mass:this.state.mass
                        })}}/>
  	    </form>
      </div>
    )
  }
}

export default RobotForm
