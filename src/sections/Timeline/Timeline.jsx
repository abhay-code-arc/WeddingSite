import TimelineContent from './TimelineContent';
import ScrollHint from '../../components/ScrollHint/ScrollHint';
import styles from './Timeline.module.css';

import useReveal from '../../hooks/useReveal';

import { playTimelineAnimation } from '../../animations/timelineAnimation';

function Timeline() {
  const sectionRef = useReveal(playTimelineAnimation);

  return (
    <section id="timeline" ref={sectionRef} className={styles.timeline}>
      <div className={styles.container}>
        <TimelineContent />
      </div>
      <ScrollHint event="timeline-animation-complete" />
    </section>
  );
}

export default Timeline;
