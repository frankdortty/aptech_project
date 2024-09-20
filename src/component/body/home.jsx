import React from 'react'
import './home.css';
const home = () => {
  return (
    <div className='main'> 
      <div className="sectionone">
        <div className="top">
            <h2>Work With Us!!</h2>
            <p>Get Help From Professionals Designers</p>
        </div>
        <div className="boxes">
            <div className="box">
                <div className="image"></div>
                <div className="content"> <p> Concept from multiple Designers </p> </div>
            </div> 
            <div className="box">
                <div className="image"></div>
                <div className="content"> <p> Concept from multiple Designers </p> </div>
            </div> 
            <div className="box">
                <div className="image"></div>
                <div className="content"> <p> Concept from multiple Designers </p> </div>
            </div> 
        </div>
      </div>
      <div className="sectiontwo">
        <div className="top">
            check out the space we transform
        </div>
        <div className="box"></div>
      </div>
      <div className="sectionthree">
        <div className="top">
            <h2>Reviews</h2>
            <p>what our clients say...</p>
            <div className="boxes">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default home
