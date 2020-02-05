import React from 'react';

export class AddCoupon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            discount: '',
            availability: ''
        };
        
        this.handleChange=(evt) =>{
            this.setState({[evt.target.name]: evt.target.value})            
        }
       
     
    }

       addCoupon = () => {
        let coupon = {
            category: this.state.category,
            discount: this.state.discount,
            availability: this.state.availability
        };
        this.props.onAdd(coupon);
    }

    render(){
        return(
            <div>
            <input type="text" id="category" name="category" value="category"  onChange={this.handleChange}/>
            <input type="text" id="discount" name="discount" value="discount" onChange={this.handleChange}/>
            <input type="text" id="availability" name="availability" value="availability" onChange={this.handleChange}/>
            <input type="button" value="add coupon" onClick={()=>{this.props.onAdd({
                            category:this.state.category,
                            discount:this.state.discount,
                            availability:this.state.availability
                        })}}/>
            </div>
        )
    }
}
export default AddCoupon
