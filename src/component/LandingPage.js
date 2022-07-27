import React from 'react'
import './land.css';
import vid from './resources/show.mp4';
function LandingPage() {
  return (
    <div className='hero' > 
    <video  src={vid}     autoplay  loop muted className='back-video' />
        
  
<nav>
<h2 className='logo'>Talent <span className='sub'>Hub</span></h2>
 <ul>
 <li><a href='#'>Home</a></li>
<li><a href='#'>About Us</a></li>
<li><a href='#'>Contact Us</a></li>
 </ul>
 
</nav>
<div className='content'>
    <h1>Talent Hub</h1>
    <a href='#'>Join Us</a>
</div>


    </div>
  )
}

export default LandingPage