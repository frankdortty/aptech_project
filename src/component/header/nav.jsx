import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Decor <sub>Vista</sub></h2>
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/consultancy">Consultancy</Link></li>
          <li><Link to="/dashbord">Dashboard</Link></li>
          <li><Link to="/cart"><ShoppingCartIcon /></Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="button">
        <button>Get Started</button>
      </div>
    </nav>
  );
}

export default Header;
