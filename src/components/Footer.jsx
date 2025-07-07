import React from "react";
import "../css/Footer.css";

// Importing icons
import SkillsPeLogo from "../assets/logo.svg";
import CallIcon from "../assets/call-icon.svg";
import MailIcon from "../assets/mail-icon.svg";
import LocationIcon from "../assets/location-icon.svg";
import LinkedInIcon from "../assets/linkedIn-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import AppleIcon from "../assets/apple-icon.svg";
import PlayStoreIcon from "../assets/play-store-icon.svg";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo-title">
            <img
              src={SkillsPeLogo}
              alt="SkillsPe Logo"
              className="footer-logo"
            />
            <p>SkillsPe</p>
          </div>

          <p className="footer-copyright" style={{ fontFamily: "satoshi" }}>
            © 2025 SkillsPe Technologies Pvt Ltd.
          </p>
          <p className="footer-contact-item">
            <img src={CallIcon} alt="Call Icon" />
            <span> +91 90966 95445</span>
          </p>
          <p className="footer-contact-item">
            <img src={MailIcon} alt="Mail Icon" />
            <span>engineering@skillspe.com</span>
          </p>
          <p className="flex items-center space-x-3  text-sm sm:text-base md:text-lg leading-relaxed">
            <img
              src={LocationIcon}
              alt="Location Icon"
              className="w-5 h-5 mt-1 shrink-0 sm:w-6 sm:h-6"
            />
            <span className="max-w-md">
              39/4/1, Building 'B', Wing 'C', Shop No. 3,
              <br /> Jai Bhavani Nagar,
              <br />
              Pune City, Maharashtra 411028,
              <br /> India
            </span>
          </p>
        </div>

        <div className="footer-center">
          <h3>Important Links</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Return Policy</a>
          <a href="#">Terms & Conditions</a>

          <div className="footer-center-social-container">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h4 className="">Download App Now</h4>
          <div className="footer-app-icons">
            <a
              href="https://apps.apple.com/in/app/skillspe/id6572280569"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-app-icon"
            >
              <img src={AppleIcon} alt="Apple Icon" />
              <span>App Store</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.application.skillspe&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-app-icon"
            >
              <img src={PlayStoreIcon} alt="Play Store Icon" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
