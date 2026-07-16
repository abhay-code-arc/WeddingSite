import useReveal from '../../hooks/useReveal';

import ScrollHint from '../../components/ScrollHint/ScrollHint';

import CountdownContent from './CountdownContent';

import { playCountdownAnimation } from '../../animations/countdownAnimation';

import styles from './Countdown.module.css';

function Countdown() {
  const sectionRef = useReveal(playCountdownAnimation);

  return (
    <section id="countdown" ref={sectionRef} className={styles.countdown}>
      <div className={`container ${styles.container}`}>
        <CountdownContent />
      </div>

      <ScrollHint event="countdown-animation-complete" />
    </section>
  );
}

export default Countdown;
