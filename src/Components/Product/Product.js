import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h6>{name}</h6>
                <h6>${price}</h6>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating : { ratings}</small></p>
            </div>
            
        </div>
    );
};

export default Product;