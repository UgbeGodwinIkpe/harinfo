import React from 'react';
import styles from '../join.styles.module.css'; // Import the CSS file for styling

const JoinUs = () => {
  return (
    <section className={styles['join-us']}>
      <div className={styles['join-us-overlay']}>
        <div className={styles['join-us-content']}>
          <h1>Join Us</h1>
          <p>
            Embark on a partnership with HarInfo if you aspire for your innovative endeavors to reach global recognition and establish you as a pioneering leader in your industry. Discovering solutions tailored for your needs is our top priority. Register with us to learn more about how we can bolster your business journey, regardless of where it might take us.
          </p>
          <button className={styles['join-us-button']}>Register</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
