import React, { Component } from 'react'

class Company extends Component{
    constructor(props){
        super(props);
        this.handleClick=()=>{
        this.props.onDelete(this.props.item.id);

        }
    }
    
    render()
    {let {item} = this.props;
        <div>
          Company ->> name: {item.name}, employees: {item.employees}, revenue: {item.revenue}
        <input type="button" value="delete" onClick={this.handleClick}/>
        </div>
    }
        
        
    
}

export default Company
