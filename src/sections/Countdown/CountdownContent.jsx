import { useEffect, useState } from 'react';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import siteData from '../../constants/siteData';

import styles from './Countdown.module.css';

function CountdownContent() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();

      const target = new Date(siteData.wedding.countdownTarget);

      const difference = target.getTime() - now.getTime();

      const remainingDays = Math.max(Math.ceil(difference / (1000 * 60 * 60 * 24)), 0);

      setDays(remainingDays);
    }

    updateCountdown();

    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.content}>
      <SectionHeading
        label="COUNTDOWN"
        title={
          <>
            Counting
            <br />
            The Days
          </>
        }
      />

      <div className={styles.counter}>
        <span className={styles.days}>{days}</span>

        <span className={styles.unit}>DAYS TO GO</span>
      </div>

      <div className={styles.separator}>
        <span className={styles.line}></span>

        <span className={styles.star}>✦</span>

        <span className={styles.line}></span>
      </div>

      <div className={styles.details}>
        <p className={styles.date}>{siteData.wedding.date}</p>

        <p className={styles.time}>{siteData.wedding.time}</p>

        <p className={styles.location}>Nagapattinam</p>
      </div>
    </div>
  );
}

export default CountdownContent;
