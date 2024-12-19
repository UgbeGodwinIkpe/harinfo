import React, { useState } from 'react';
import styles from '../styles.module.css';
function ClientsFeedbacks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: '"Partnering with HarInfo was the best decision we made. Their innovative solutions and strategic insights have transformed our business operations, driving unprecedented upscaling. They truly understand our vision and have been instrumental in helping us achieve it. My company experienced 230% growth rate in 1.5 years. Crazy, right? Yeah, I know."',
      author: 'JShibram V.',
      company: 'CEO of TechBus',
    },
    {
      text: '"HarInfo expertise in AI and ML has been a game-changer for us. Their team seamlessly integrated with ours, providing continuous support that catapulted us 250,000 miles ahead. While we were using fuel, they brought nuclear energy 🚀 FellowSheep have significantly improved since our partnership. I\'m glad to have used them"',
       author: 'Fasakin Michael',
      company: 'Group Director, FellowSheep',
    },
    {
      text: '"Understanding our challenges and fetching specific solutions for us is what sets HarInfo apart. They have become an invaluable part of our journey towards success.. They have done what even we couldn\'t do for the company. Seeing us upscale 314% of what we used to be is nothing short of awesome.  I don\'t have much to say, but please get me that lifetime contract, let\'s sign it!"',
      author: 'Criston Daniel',
      company: 'Founder of HalfRed ',
    },
    
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles['testimonials-section']}>
      <h2 style={{color:"white"}}>What Clients Think Of Us</h2>
      <div className={styles['testimonial-slider']}>
        <div className={styles['testimonial']}>
          <p>{testimonials[currentIndex].text}</p>
          <h5>
            &mdash; {testimonials[currentIndex].author}, {testimonials[currentIndex].company}
          </h5>
        </div>
        <div className={styles['slider-controls']}>
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default ClientsFeedbacks;