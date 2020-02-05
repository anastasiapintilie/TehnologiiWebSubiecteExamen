import React, { Component } from 'react'

class CompanyDetails extends Component{
    constructor(props)
    {
        super(props)
        this.cancel=()=>{
            this.props.onCancel()
        }
    }

    
   
    render()
    {
         let {item}= this.props
        return(
            <div>
                Name {item.name} with {item.employees} employees {item.revenue} revenue
                <input type="button" id="cancel" label="cancel" onClick={this.cancel}/>
            </div>
            )
    }
}

export default CompanyDetails
