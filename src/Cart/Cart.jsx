import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    
    for (const product of cart) {
        //srotcut solution
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 20 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <p>Selected Items: {quantity}</p>
            <p>Total price: {totalPrice} </p>
            <p>Total shipping: {totalShipping} </p>
            <p>Total tax: {tax.toFixed(2)} </p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;