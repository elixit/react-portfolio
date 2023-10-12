import React from 'react';

const Footer = () => {
  return (
    <footer className='footer-container text-center text-lg-start text-muted' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div className='footer-content p-4'>
        <a rel="noreferrer" href='https://github.com/elixit' target="_blank" className='footer-link me-4 text-reset'>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
