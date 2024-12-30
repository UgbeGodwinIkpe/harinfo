import React from 'react';
import styles from '../styles.module.css'; // Import the CSS file for styling

const NewsLetter = () => {
  return (
    <section className={styles['subscription-form']}>
        <form>
          <div className={styles['subscription-form-overlay']}>
            <div className={styles['subscription-form-content']}>
              <h1>News Letters</h1>
              <p>Stay updated with the latest trends in technology, innovation, and business solutions by subscribing to our newsletter. Get insights, tips, and news delivered straight to your inbox, and never miss out on what’s happening in the world of HarInfo. Subscribe to our newsletter today.</p>
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </form>
    </section>
  );
};

export default NewsLetter;
