import React from 'react'

import videoBg from '../../assets/videos/hyperspace.mp4';

import '../../App.css';
import './WelcomeSection.css';


function WelcomeSection() {
    return (
      <div className='welcome-container'>
        <video src={videoBg} autoPlay loop muted />
      </div>
    );
  }
  
  export default WelcomeSection;