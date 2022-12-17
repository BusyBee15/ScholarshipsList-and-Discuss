import React from 'react'
import './Footer.css'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsSuitHeartFill} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
   <footer className='footer'>
    {/* big container */}

    <div className='footerdivs-container'>

    {/* container for social handles */}
    <div className="socials">
      <p>Follow me on </p>
      <a href="https://twitter.com/busy_bee_15" target='_blank'><div className='icon'><FaTwitter/></div></a>
      <a href="https://www.linkedin.com/in/busybee15/" target='_blank'><div className='icon'><FaLinkedin/></div></a>
      
    </div>


    {/* container for middle content */}
    <div className="middle-div">
      <p>Contribute  </p>
       <a href="https://github.com/BusyBee15/ScholarshipsList-and-Discuss" target='_blank'><div className="icon"><FaGithub/></div></a> 
     
    </div>


    {/* container for right content */}
    <div className="right-div">
      <p>Made with</p> 
      <div className="icon"><BsSuitHeartFill/>
      </div>
       <h4>busybee</h4>
     
    </div>

    </div>
    {/* end of big containers */}
   </footer>
  )
}

export default Footer