import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
             <h1>Order Summary</h1>
                <p>Product Selected: {cart.length }</p>
        </div>
    );
};

export default Cart;