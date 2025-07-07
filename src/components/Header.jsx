import '../css/Header.css';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import SkillsPeLogo from '../assets/logo.svg';
import SkillspePeLogoFull from '../assets/full_logo.svg';

export default function Header({ visible, setShowSignupModal }) {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleScrollTo = (id) => {
    setShowNavMenu(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); 
  };

  return (
    <>
      {/* Fixed Header */}
  {/* Fixed Header - hidden when mobile menu is open */}
{!showNavMenu && (
  <div className={`headerContainer ${visible ? 'show' : 'hide'}`}>
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={SkillsPeLogo} alt="SkillsPe Logo" className="logo-image" />
        <span className="logo-text">SkillsPe</span>
      </div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <a href="#how-it-works">How It Works</a>
        <a href="#mobile-app">Mobile App</a>
        <a href="#features">Features</a>
        <a href="#about">About Us</a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon">
        <button
          onClick={() => setShowNavMenu(true)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <HiOutlineMenu style={{ fontSize: '1.875rem', color: '#1B184F' }} />
        </button>
      </div>
    </div>
  </div>
)}


      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {showNavMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col fixed inset-0 z-[999]"
            style={{
              background: 'linear-gradient(110deg, #8247DF 0%, #1B184F 79.32%)',
            }}
          >
            {/* Close Button */}
            <div
              className="absolute flex sm:flex-row flex-col justify-end top-[2rem] right-[2rem]"
              onClick={() => setShowNavMenu(false)}
            >
              <div className="flex sm:flex-row flex-col">
                <div className="border border-pink rounded-full p-2 cursor-pointer hover:border-white hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <mask id="mask0_456_11" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                      <rect width="36" height="36" fill="#FF34C1" />
                    </mask>
                    <g mask="url(#mask0_456_11)">
                      <path
                        d="M12.5732 25.5375L10.4626 23.4375L15.8897 17.9999L10.4626 12.6L12.5732 10.5L18.0003 15.923L23.3896 10.5L25.5001 12.6L20.0731 17.9999L25.5001 23.4375L23.3896 25.5375L18.0003 20.1145L12.5732 25.5375Z"
                        fill="#FF34C1"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex flex-1 sm:flex-row flex-col overflow-hidden sm:justify-center justify-between items-center sm:px-0 px-[2rem] sm:py-0 pt-[18vh]">
              <div className="flex overflow-hidden ">
                <div className="flex-1 border-r border-[#8247DF]">
                  <div className="my-1 sm:px-0 px-[4rem]">
                    <img src={SkillspePeLogoFull} className="h-[2.4rem]" alt="Skillspe beta logo" />
                  </div>

                  <div className="w-[431px] text-white font-satoshi sm:leading-[1.85rem] leading-[1.5rem] px-[4rem] pb-[8vh]">
                    Train your skills, Trade your skills.
                  </div>

                  <motion.div className="grid grid-flow-row gap-[1.6rem] px-[4rem] text-[1.375rem] font-satoshi text-white">
                    <button onClick={() => handleScrollTo('how-it-works')} className="cursor-pointer hover:scale-105 transition text-left">
                      How It Works
                    </button>
                    <button onClick={() => handleScrollTo('mobile-app')} className="cursor-pointer hover:scale-105 transition text-left">
                      Mobile App
                    </button>
                    <button onClick={() => handleScrollTo('features')} className="cursor-pointer hover:scale-105 transition text-left">
                    Features
                    </button>
                    <button onClick={() => handleScrollTo('about')} className="cursor-pointer hover:scale-105 transition text-left">
                      About Us
                    </button>
                  </motion.div>

 {/* <motion.div className="px-[4.2rem] pt-[6rem]">
                    <SignupForBeta
                      setShowSignupModal={(value) => {
                        setShowNavMenu(false);
                        setShowSignupModal(true);
                      }}
                    />
                    <div className="text-white font-satoshi text-[.8rem] pt-1">
                      © 2025 SkillsPe, Inc.
                    </div>
                  </motion.div>  */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
