import useReveal from '../../hooks/useReveal';

import ClosingContent from './ClosingContent';
import { playClosingAnimation } from './closingAnimation';

import styles from './Closing.module.css';

function Closing() {
  const sectionRef = useReveal(playClosingAnimation);

  return (
    <section id="closing" ref={sectionRef} className={styles.closing}>
      <ClosingContent />
    </section>
  );
}

export default Closing;
