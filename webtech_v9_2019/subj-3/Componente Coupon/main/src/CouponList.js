import React from 'react';
import AddCoupon from './AddCoupon'

export class CouponList extends React.Component {
    constructor(){
        super();
        this.state = {
            coupons: []
        };
    
        this.add = (coupon) => 
        {
            this.state.coupons(coupon);
        }
    }

    render(){
        return(
            <div>
                        <AddCoupon onAdd={this.add}/>

            </div>
        )
    }
}
export default CouponList
