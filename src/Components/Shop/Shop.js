import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
            <div>
                <h1>Number of products {products.length}</h1>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;