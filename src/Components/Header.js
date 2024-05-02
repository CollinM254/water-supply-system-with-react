import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import { AccountCircle, ShoppingBasket } from '@mui/icons-material';
import { useCart } from '../CartContext'; // Import the useCart hook
import './App.css';

const Header = () => {
  const { cartItems } = useCart(); // Consume the context using useCart hook

  return (
    <header className="header">
      <div className="logo">
        <img src="data:image/jpeg;base64,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" alt="Your Logo" style={{ maxWidth: '100px' }} />
      </div>
      <nav className="header-links">
        <Link className="header-link" to="/">Home</Link>
        <Link className="header-link" to="/cart">Cart</Link>
        <Link className="header-link" to="/checkout">Checkout</Link>
      </nav>
      <div className="profile-and-basket">
        <Link to="/profile">
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/cart">
          <IconButton>
            <Badge 
            badgeContent={cartItems.length} color="secondary"
            >
              <ShoppingBasket fontSize="large" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
