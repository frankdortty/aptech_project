import React from 'react';
import './header.css';
import Nav from './nav';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div>
      <header>
        <Nav />
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="search-icon" /> 
        </div>
      </header>
    </div>
  );
};

export default Header;
