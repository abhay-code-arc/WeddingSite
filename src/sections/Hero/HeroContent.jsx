import { useState } from 'react';

import siteData from '../../constants/siteData';
import Button from '../../components/Button/Button';

import styles from './HeroContent.module.css';

function HeroContent() {
  const { couple, wedding, hero } = siteData;

  const [isScrolling, setIsScrolling] = useState(false);

  const handleBeginJourney = () => {
    if (isScrolling) return;

    setIsScrolling(true);

    const storySection = document.getElementById('story');

    if (storySection) {
      const y = storySection.offsetTop;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className={styles.content}>
      <p className={styles.overline} data-animate="overline">
        {hero.tagline}
      </p>

      <div className={styles.heading}>
        <h1 className={styles.name} data-animate="groom">
          {couple.groom.displayName}
        </h1>

        <div className={styles.union}>
          <span className={styles.line} data-line />

          <span className={styles.ampersand} data-ampersand>
            &amp;
          </span>

          <span className={styles.line} data-line />
        </div>

        <h1 className={styles.name} data-animate="bride">
          {couple.bride.displayName}
        </h1>
      </div>

      <p className={styles.date} data-animate="date">
        {wedding.date}
      </p>

      <div className={styles.action} data-animate="button">
        <Button onClick={handleBeginJourney} disabled={isScrolling}>
          {hero.buttonText}
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
