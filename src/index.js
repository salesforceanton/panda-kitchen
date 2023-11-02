import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import CartProvider from './components/cart/cartContext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
 );