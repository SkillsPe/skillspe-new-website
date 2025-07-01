import React, { useState } from 'react';

// Importing CSS File
import '../css/card_carousel.css';

// Importing Images
import LeftArrowBtn from '../assets/left-arrow-btn.svg';
import RightArrowBtn from '../assets/right-arrow-btn.svg';
import Challenger1 from '../assets/challenger1.svg';
import InviteChallenger from '../assets/invite-challenger-image.svg';
import VsImage from '../assets/vs-image.svg';
import InviteMotivatorsImage from '../assets/invite-motivators-image.svg';
import InviteModeratorImage from '../assets/invite-moderators-image.svg';

const Card2 = () => {
  return (
    <div className='vs-card'>
      <img src={Challenger1} alt='Player 1' className='avatar' />

      <img src={VsImage} alt='VS Image Not Found' />

      <img
        src={InviteChallenger}
        alt='Invite Challenger'
        className='avatar dotted'
      />
    </div>
  );
};

const Card3 = () => {
  return (
    <div className='card3'>
      <img
        className='invite'
        src={InviteMotivatorsImage}
        alt='Invite Motivators Image Not Found'
      />{' '}

      <hr />
      <img
        className='invite'
        src={InviteModeratorImage}
        alt='Invite Moderator Image Not Found'
      />
    </div>
  );
};



const sampleCards = [
  <div>Step 1: Register</div>,
  <Card2 />,
  <Card3 />,

  <div>Step 4: Moderator Reviews</div>,
  <div>Step 5: Winner Declared</div>,
  <div>Step 6: Share your Badge</div>,
];

const CardCarousel = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = cards.length;

  const getVisibleCards = () => {
    return [0, 1, 2].map((i) => cards[(startIndex + i) % totalCards]);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const visibleCards = getVisibleCards();

  return (
    <div className='carousel-container'>
      <div className='cards-wrapper'>
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${index === 0 ? 'active' : 'faded'}`}
          >
            {card}
          </div>
        ))}
      </div>
      <div className='nav-container'>
        <div className='nav-description'>
          <span>
            Create a skill based private challenge around something you’re great
            at like running, gaming, or anything!
          </span>
        </div>
        <div className='nav-buttons-wrapper'>
          <button onClick={handlePrev} className='nav-btn'>
            <img src={LeftArrowBtn} alt='left arrow' />
          </button>
          <button onClick={handleNext} className='nav-btn'>
            <img src={RightArrowBtn} alt='right arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CardCarouselPreview() {
  return (
    <div className='card-carousel-container'>
      <h1>
        Step 1 <br />
        Create a Duo Private Challenge
      </h1>
      <CardCarousel cards={sampleCards} />
    </div>
  );
}
