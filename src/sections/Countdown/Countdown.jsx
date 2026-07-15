import CountdownContent from './CountdownContent';

import styles from './Countdown.module.css';

function Countdown() {
  return (
    <section id="countdown" className={styles.countdown}>
      <div className={`container ${styles.container}`}>
        <CountdownContent />
      </div>
    </section>
  );
}

export default Countdown;
