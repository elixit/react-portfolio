import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Nav = () => {
  // State for controlling the mobile navigation menu
  const [showNav, setShowNav] = useState(false);

  // Function to toggle the mobile navigation menu
  const toggleNav = () => setShowNav(!showNav);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        {/* Mobile menu toggle button */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded={showNav ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={toggleNav}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Brand logo with link to home */}
        <LinkContainer to="/">
          <a className='navbar-brand' href="#home">Ismail Khan</a>
        </LinkContainer>
        {/* Mobile navigation menu */}
        <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            {/* Dynamically generate navigation links */}
            {[
              { path: '/about', label: 'About' },
              { path: '/portfolio', label: 'Portfolio' },
              { path: '/resume', label: 'Resume' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <LinkContainer key={path} to={path}>
                <li className='nav-item'>
                  {/* Set the href attribute for accessibility */}
                  <a className='nav-link' href={`#${path.toLowerCase()}`}>{label}</a>
                </li>
              </LinkContainer>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
