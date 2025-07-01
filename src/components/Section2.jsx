// importing css for the Home component
import '../css/Section2.css';
import PhoneImage from '../assets/mobile-image.svg';

export default function Section2() {
  return (
    <div className='container'>
      {/* Left Panel */}
      <div className='left-panel'>
        <h1 className='headline'>
          Jo Socha Wahi <br /> Sach Nikla?
        </h1>
        <br /><br />
        <h2 className='subheadline'>Predict Like a Pro.</h2>
        <p className='description'>
          Test your knowledge from sports to finance, put your opinion in
          skill-based prediction challenges and earn money.
        </p>

        {/* Yes / No bar */}
        <div className='vote-bar'>
          <div className='btn-yes'>YES</div>
          <div className='bar'>
            <div className='label label-left'>30%</div>
            <div className='label label-right'>70%</div>
          </div>
          <div className='btn-no'>NO</div>
        </div>
      </div>

      {/* Right Panel */}
      <div className='right-panel'>
        <img src={PhoneImage} alt='phone' />
      </div>
    </div>
  );
}
