import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Decor <sub>Vista</sub></h2>
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/consultancy">Consultancy</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
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

export default Nav;


