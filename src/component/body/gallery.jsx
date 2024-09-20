import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import './home.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  // State to track the "like" status of each box
  const [likedBoxes, setLikedBoxes] = useState([false, false, false]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle "like" state for each box
  const toggleLike = (index) => {
    const updatedLikes = [...likedBoxes];
    updatedLikes[index] = !updatedLikes[index];
    setLikedBoxes(updatedLikes);
  };

  return (
    <div className='gallery'>
      <div className="onesec">
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={toggleDropdown}
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '200px',
            }}
          >
            Categories
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {isOpen && (
            <div
              className="dropdown-list"
              style={{
                border: '1px solid #ccc',
                width: '200px',
                position: 'absolute',
                background: '#fff',
                zIndex: 1,
              }}
            >
              <div className="dropdown-item" style={{ padding: '10px', cursor: 'pointer' }}>
                Home 1
              </div>
              <div className="dropdown-item" style={{ padding: '10px', cursor: 'pointer' }}>
                Home 2
              </div>
              <div className="dropdown-item" style={{ padding: '10px', cursor: 'pointer' }}>
                Home 3
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sectiontwo">
        <div className="boxes">
          {likedBoxes.map((liked, index) => (
            <div key={index} className="box">
              <div className="icon" onClick={() => toggleLike(index)} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    fontSize: '24px',
                    color: liked ? 'red' : 'gray',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
