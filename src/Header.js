import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        {/* nav links container  */}
        <div className='navlinks-container'>
            {/* nav links  */}
            <div className='nav-link'>
               <Link style={{textDecoration:'none'}}to='/'> <h2>list of scholarships</h2></Link>
            </div>
            <div className='nav-link'>
                <Link style={{textDecoration:'none'}}to='/contact'><h2>contact us</h2></Link>
            </div>
            <div className='nav-link'>
                <Link style={{textDecoration:'none'}}to='discuss'><h2>discuss</h2></Link>
            </div>
            {/* nav links  */}
        </div>
        {/* nav links container */}
    </header>
  )
}

export default Header