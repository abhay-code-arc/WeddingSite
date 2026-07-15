import TimelineContent from './TimelineContent';

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
    </section>
  );
}

export default Timeline;
