import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProductList.css';
import { useCart } from '../CartContext'; // Import useCart from CartContext

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.company} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.company}</h3>
              <p className="product-details"><strong>Chemicals Used:</strong> {product.chemicals}</p>
              <p className="product-details"><strong>Location:</strong> {product.location}</p>
              <p className="product-price"><strong>Price:</strong> KSH{product.price}</p> {/* Add price here */}
            </div>
          </Link>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
