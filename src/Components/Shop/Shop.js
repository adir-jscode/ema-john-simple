import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
        .then(data => setProducts(data.slice(0,20)))
    }, [])
    const handleCart = (products) => {
        const newCart = [...cart, products];
         setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <h1>Order Summary</h1>
                <p>Product Selected: {cart.length }</p>
            </div>
        </div>
    );
};

export default Shop;