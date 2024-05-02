import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header';
import ProductList from '../src/Components/ProductList';
import ProductDetails from '../src/Components/ProductDetails';
import Cart from '../src/Components/Cart';
import Checkout from '../src/Components/Checkout';
import "./App.css";
import { CartProvider } from './CartContext';
import Profile from './Components/Profile';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      company: 'Company: Dasani',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhuLF6-MN8FaVJw5300k9Er3LLHcygFXBxg&usqp=CAU',
      chemicals: 'chlorine, chloramine',
      location: 'Makutano, Meru',
      price: 50 
    },
    {
      id: 2,
      company: 'Company: MajiAgri Solutions.',
      image: 'data:image/jpeg;base64,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',
      chemicals: 'chlorine, chlorine dioxide',
      location: 'Nkubu, Meru',
      price: 60 
    },
    {
      id: 3,
      company: 'Company: Bliss Company',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1dso_MHaU8AXPWJ05h2Og0nucr2E6HaMGA&usqp=CA',
      chemicals: 'chloramine',
      location: 'Meru town',
      price: 70 
    },
    {
      id: 3,
      company: 'Company: Bliss Company',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1dso_MHaU8AXPWJ05h2Og0nucr2E6HaMGA&usqp=CA',
      chemicals: 'chloramine, ',
      location: 'Meru town',
      price: 70 
    },
    {
      id: 3,
      company: 'Company: Bliss Company',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1dso_MHaU8AXPWJ05h2Og0nucr2E6HaMGA&usqp=CA',
      chemicals: 'chloramine',
      location: 'Meru town',
      price: 70 
    },
    {
      id: 3,
      company: 'Company: Bliss Company',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1dso_MHaU8AXPWJ05h2Og0nucr2E6HaMGA&usqp=CA',
      chemicals: 'chloramine',
      location: 'Meru town',
      price: 70 
    },
    {
      id: 4,
      company: 'Company: Japmor Enterprise',
      image: 'data:image/jpeg;base64,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',
      chemicals: 'Chlorine',
      location: 'Mitunguu, Meru',
      price: 80 
    }
    
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <CartProvider> 
        <div className="app">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<ProductList products={products} />} />
              <Route path="/product/:id" element={<ProductDetails products={products} />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />

            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
