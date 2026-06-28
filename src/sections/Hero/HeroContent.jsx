import siteData from '../../constants/siteData';
import Button from '../../components/Button/Button';

import styles from './HeroContent.module.css';

function HeroContent() {
  const { couple, wedding, hero } = siteData;

  return (
    <div className={styles.content}>
      <p className={styles.overline}>{hero.tagline}</p>

      <div className={styles.heading}>
        <h1 className={styles.name} data-animate="groom">
          {couple.groom.displayName}
        </h1>

        <div className={styles.ornament} data-animate="ornament">
          ❦
        </div>

        <h1 className={styles.name} data-animate="bride">
          {couple.bride.displayName}
        </h1>
      </div>

      <div className={styles.divider}>
        <span />
      </div>

      <p className={styles.date} data-animate="date">
        {wedding.date}
      </p>

      <div className={styles.action}>
        <Button>{hero.buttonText}</Button>
      </div>
    </div>
  );
}

export default HeroContent;
