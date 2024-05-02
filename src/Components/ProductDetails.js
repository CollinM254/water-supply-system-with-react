// ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img className="product-image" src={product.image} alt={product.company} />
          <div className="product-details">
            <h3>{product.company}</h3>
            <p>Chemicals: {product.chemicals}</p>
            <p>Location: {product.location}</p>
            <button className="product-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
