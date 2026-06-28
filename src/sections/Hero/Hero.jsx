import { useLayoutEffect, useRef } from 'react';

import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

import { playHeroAnimation } from '../../animations/heroAnimation';

import styles from './Hero.module.css';

function Hero({ startAnimation }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!startAnimation) return;

    const tl = playHeroAnimation(heroRef.current);

    return () => {
      tl.kill();
    };
  }, [startAnimation]);

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <HeroBackground />

      <div className={`container ${styles.container}`}>
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
