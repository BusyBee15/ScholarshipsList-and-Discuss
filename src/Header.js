import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        {/* nav links container  */}
        <div className='navlinks-container'>
            {/* nav links  */}
            <div className='nav-link'>
                <h2>list of scholarships</h2>
            </div>
            <div className='nav-link'>
                <h2>contact us</h2>
            </div>
            <div className='nav-link'>
                <h2>discuss</h2>
            </div>
            {/* nav links  */}
        </div>
        {/* nav links container */}
    </header>
  )
}

export default Header