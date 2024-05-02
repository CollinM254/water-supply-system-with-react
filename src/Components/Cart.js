import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart && cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
