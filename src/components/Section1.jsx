import '../css/Section1.css';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

export default function Section1() {
  return (
    <div className='section1-container'>
      <div className='text-container'>
        <p className='text1'>Apni SkillsPe Lagao Paisa,</p>
        <p className='text2'>Challenge your friends & Jeeto Rewards!</p>
        <br />
        <p className='text3'>
          Your Skills aren't just Cool, They're Profitable Now.
        </p>
      </div>

      <br />
      <br />

      <div className='image-container'>
        <div className='image-wrapper-item image1'></div>
        <div className='image-wrapper-item image2'></div>
        <div className='image-wrapper-item image3'></div>
      </div>

      <br />
      <br />

      <div className='download-container'>
        <div className='download-section'>
          <span>Start Winning, Download Now!</span>
          <div className='download-button'>
            <div className='download-button-item1'>
              <FaApple className='download-icon' />
              <div className='download-text'>
                <span>Download On the</span>
                <span className='bold-text'>App Store</span>
              </div>
            </div>
            <div className='download-button-item2'>
              <IoLogoGooglePlaystore className='download-icon' />
              <div className='download-text'>
                <span>GET IT ON</span>
                <span className='bold-text'>Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
