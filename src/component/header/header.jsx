import React from 'react';
import './header.css';
import Nav from './nav';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get the current route

  // Determine the text based on the current route
  const pageTitle = location.pathname === '/gallery' ? 'Gallery' : 'Home';

  return (
    <div>
      <header>
        <Nav />
        <div className="hed">
          <div className="textdeche">
            <h2>{pageTitle}</h2> {/* Dynamic title */}
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchIcon className="search-icon" /> 
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
