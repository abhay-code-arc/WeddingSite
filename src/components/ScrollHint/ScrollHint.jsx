import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

import styles from './ScrollHint.module.css';

function ScrollHint({ event }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let canHide = false;

    const showArrow = () => {
      canHide = true;
      setVisible(true);
    };

    const hideArrow = () => {
      if (!canHide) return;

      setVisible(false);

      window.removeEventListener('scroll', hideArrow);
    };

    window.addEventListener(event, showArrow);

    window.addEventListener('scroll', hideArrow, {
      passive: true,
    });

    return () => {
      window.removeEventListener(event, showArrow);

      window.removeEventListener('scroll', hideArrow);
    };
  }, [event]);

  return (
    <div className={`${styles.scrollHint} ${visible ? styles.visible : ''}`} aria-hidden="true">
      <HiChevronDown className={styles.arrow} />
      <HiChevronDown className={styles.arrowSecond} />
    </div>
  );
}

export default ScrollHint;
