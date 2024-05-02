import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Address:</label>
        <textarea></textarea>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
