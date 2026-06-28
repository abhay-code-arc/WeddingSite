import { useEffect, useRef } from 'react';
import { playLoaderAnimation } from '../../animations/loaderAnimation';

import styles from './Loader.module.css';

function Loader({ onFinish }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = playLoaderAnimation(loaderRef.current, onFinish);

    return () => tl.kill();
  }, [onFinish]);

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div className={styles.content}>
        <div className={styles.initials}>
          <span className={`${styles.letter} loader-letter a`}>A</span>

          <div className={`${styles.line} loader-line`} />

          <span className={`${styles.letter} loader-letter k`}>K</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
