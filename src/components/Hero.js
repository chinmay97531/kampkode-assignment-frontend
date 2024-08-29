import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="hero">
      <h1 className="heading">We've really sped up our workflow</h1>
      <p className="para"><b>We have just released a new update!</b>Check out the all new dashboard view. Pages and now load faster.you can try us
      <br />for free for 30 days.<br />Join 4,000+ companies already growing</p>
      <div className="hero_buttons">
        <button className="hero_first_button">
          <FontAwesomeIcon icon={faArrowRight} size={42} color='black'/>Start Learning Today</button>
        <button className="hero_second_button">Join Now</button>
      </div>
    </div>
  );
}
//⬅
// const styles = {
//   hero: {
//     textAlign: 'center',
//     padding: '100px 20px',
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: '60px',
//     fontWeight: '400',
//   },
//   buttons: {
//     marginTop: '20px',
//   },
//   p: {
//     fontSize: '20px',
//   },
//   ctaButton: {
//     padding: '12px 24px',
//     backgroundColor: '#6c63ff',
//     color: '#fff',
//     borderRadius: '8px',
//     marginRight: '10px',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   secondaryButton: {
//     padding: '12px 24px',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     border: '1px solid #6c63ff',
//     cursor: 'pointer',
//   },
// };

export default Hero;
