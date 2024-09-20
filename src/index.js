import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Consultancy from './Consultancy'; // Example component
// import Catalog from './Catalog'; // Example component
// import Gallery from './Gallery'; // Example component
// import Login from './Login'; // Example component
// import Cart from './Cart'; // Example component
import reportWebVitals from './reportWebVitals';

// Create the root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Router setup
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

