import '../css/Section6.css';

import background4 from '../assets/section5-background4.svg';
import background5 from '../assets/section5-background5.svg';
import background6 from '../assets/section5-background6.svg';
import background7 from '../assets/section5-background7.svg';

import tickImage from '../assets/tick-image.svg';
import archerImage from '../assets/archer-image.svg';
import handImage from '../assets/hand-image.svg';
import graphImage from '../assets/graph-image.svg';

import Disclaimer from './Disclaimer.jsx';

export default function Section6() {
  return (
    <section className='features-section'>
      <div className='features-header'>
        <h1>Features Aise, Jo Banaye Skills Ko Power Play!</h1>
        <br />
        <p>Discover a smarter way to grow, earn, and win with your skills!</p>
        <br />
      </div>

      {/* Feature Image Container */}
      <div className='feature-image-container'>
        {/* Image Container 1 */}
        <div className='feature-image feature-image-item1'>
          <img src={background5} alt='Background not found' />
          <div>
            <div className='feature-image-text'>
              <h2 className='feature-heading feature-heading1'>
                Trust & Safety
              </h2>
              <p className='feature-description feature-description1'>
                KYC-backed identity checks and real-time moderation to keep
                every challenge honest and every user protected
              </p>
            </div>

            <div className='feature-tick-icon'>
              <img src={tickImage} alt='tick' />
            </div>
          </div>
        </div>

        {/* Image Container 2 */}
        <div className='feature-image feature-image-item2'>
          <img src={background6} alt='Your Skill Portfolio' />
          <div>
            <div className='feature-image-text'>
              <h2 className='feature-heading feature-heading2'>
                Your Skill Portfolio
              </h2>
              <p className='feature-description feature-description2'>
                Track your progress, showcase completed challenges, and build a
                powerful portfolio that reflects your real-world skills.
              </p>
              <img

                className='feature-growthChart-icon'
                src={graphImage}
                alt='graphImage not found'
              />
            </div>
          </div>
        </div>

        {/* Image Container 3 */}
        <div className='feature-image feature-image-item3'>
          <img src={background4} alt='Sharpen Your Skills' />
          <div>
            <div className='feature-image-text'>
              <h2 className='feature-heading feature-heading3'>
                Sharpen Your Skills!
              </h2>
              <p className='feature-description feature-description3'>
                Level up your skills by playing more challenges! Compete &amp;
                win daily.
              </p>
            </div>
            <div className='feature-archer-icon'>
              <img src={archerImage} alt='tick' />
            </div>
          </div>
        </div>

        {/* Image Container 4 */}
        <div className='feature-image feature-image-item4'>
          <img src={background7} alt='Not playing? Still earning' />
          <div className=''>
            <div className='feature-image-text'>
              <h2 className='feature-heading feature-heading4'>
                Not playing?
                <br />
                Still earning
              </h2>
              <div className='feature-description feature-description4'>
                Join as a Motivator. Predict the Challenger’s success with a Yes
                or No and earn if you're right!
              </div>
            </div>
            <div className='feature-hand-icon'>
              <img src={handImage} alt='tick' />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Disclaimer />
    </section>
  );
}
