import React, { Component } from 'react'

class Robot extends Component {
	constructor(props){
	 super(props)
        this.state=
        {
            isEditing:false,
            type: this.props.type,
            name:this.props.name,
            mass:this.props.mass,
        }
	
	}
	componentDidMount(){
	
	}
  render() {
    return (
      <div>
      	{
      		<input type="button" value="delete" onClick={()=>{ this.props.onDelete(this.props.item.id)}}/>
      	}
      </div>
    )
  }
}

export default Robot