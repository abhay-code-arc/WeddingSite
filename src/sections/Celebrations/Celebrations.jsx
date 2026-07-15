import CelebrationsContent from './CelebrationsContent';

import styles from './Celebrations.module.css';

import useReveal from '../../hooks/useReveal';
import { playCelebrationsAnimation } from '../../animations/celebrationsAnimation';

function Celebrations() {
  const sectionRef = useReveal(playCelebrationsAnimation);

  return (
    <section id="celebrations" ref={sectionRef} className={styles.celebrations}>
      <div className={`container ${styles.container}`}>
        <CelebrationsContent />
      </div>
    </section>
  );
}

export default Celebrations;
