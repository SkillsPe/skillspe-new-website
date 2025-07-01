// importing css for the Header component
import '../css/Header.css';

import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import SkillsPeLogo from '../assets/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='headerContainer' >
      <div className='header'>
        {/* Logo */}
        <div className='logo-container'>
          <img src={SkillsPeLogo} alt='SkillsPe Logo' className='logo-image' />
          {/* Logo Text */}
          <span className='logo-text'>SkillsPe</span>
        </div>

        {/* Desktop Nav */}
        <nav className='desktop-nav'>
          <a href='#'>How It Works</a>
          <a href='#'>Mobile App</a>
          <a href='#'>Features</a>
          <a href='#'>About Us</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className='mobile-menu-icon'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <HiOutlineMenu style={{ fontSize: '1.875rem', color: '#1B184F' }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='mobile-menu'>
            <a href='#'>How It Works</a>
            <a href='#'>Mobile App</a>
            <a href='#'>Features</a>
            <a href='#'>About Us</a>
          </div>
        )}
      </div>
    </div>
  );
}
