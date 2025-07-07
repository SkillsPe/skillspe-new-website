import CardCarousel from './card_carousel.jsx';
import '../css/Section5.css';

function Section5({isDuo}) {
  return (
    <div className='card-container' >
      <CardCarousel isDuo={isDuo}/>
    </div>
  );
}

export default Section5;
