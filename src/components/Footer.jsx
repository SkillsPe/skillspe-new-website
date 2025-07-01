import React from 'react';
import '../css/Footer.css';

// Importing icons
import SkillsPeLogo from '../assets/logo.svg';
import CallIcon from '../assets/call-icon.svg';
import MailIcon from '../assets/mail-icon.svg';
import LocationIcon from '../assets/location-icon.svg';
import LinkedInIcon from '../assets/linkedIn-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import AppleIcon from '../assets/apple-icon.svg';
import PlayStoreIcon from '../assets/play-store-icon.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <div className='footer-logo-title'>
          <img src={SkillsPeLogo} alt='SkillsPe Logo' className='footer-logo' />
          <p>SkillsPe</p>
        </div>
        <br />
        <p>© 2025 SkillsPe Technologies Pvt Ltd.</p>
        <p className='footer-contact-item'>
          <img src={CallIcon} alt='Call Icon' />
          <span> +91 90966 95445</span>
        </p>
        <p className='footer-contact-item'>
          <img src={MailIcon} alt='Mail Icon' />
          <span>engineering@skillspe.com</span>
        </p>
        <p className='footer-contact-item'>
          <img src={LocationIcon} alt='Location Icon' />
          <span>
            39/4/1, Bldg. 'B' Wing 'C' Shop No. 3,
            <br /> Jai Bhavani Nagar, Pune City,
            <br />
            Maharashtra - 411028, India
          </span>
        </p>
      </div>

      <div className='footer-center'>
        <h3>Important Links</h3>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Return Policy</a>
        <a href='#'>Terms & Conditions</a>

        <h4>Follow Us</h4>
        <div className='social-icons'>
          <a href='#'>
            <img src={InstagramIcon} alt='Instagram' />
          </a>
          <a href='#'>
            <img src={LinkedInIcon} alt='LinkedIn' />
          </a>
        </div>
      </div>

      <div className='footer-right'>
        <h4>Download App Now</h4>
        <div className='footer-app-icons'>
          <div className='footer-app-icon'>
            <img src={AppleIcon} alt='Apple Icon' />
            <span>
              App Store
            </span>
          </div>
          <div className='footer-app-icon'>
            <img src={PlayStoreIcon} alt='Play Store Icon' />
            <span>
              Google Play
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
