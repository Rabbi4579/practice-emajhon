import React from 'react';
import './Products.css';

const Products = (props) => {
    const { img, name, price, seller, ratings, id } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-items'>
                <h5>Name: {name}</h5>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddtoCart(props.product)} className='cart-btn'>
                Add to cart
            </button>
        </div>
    );
};

export default Products;