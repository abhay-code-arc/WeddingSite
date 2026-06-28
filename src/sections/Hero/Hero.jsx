import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroScroll from './HeroScroll';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <HeroBackground />

      <div className={`container ${styles.container}`}>
        <HeroContent />
      </div>

      <HeroScroll />
    </section>
  );
}

export default Hero;
