import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name, img} = props.cart
    // console.log(cart);
    return (
        <div>
            <div className='cart'>
                <img src={img} alt="" />
                <h4> {name}</h4>
            </div>
        </div>  
    );
};

export default Cart;