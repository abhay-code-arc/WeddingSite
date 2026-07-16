import StoryContent from './StoryContent';
import ScrollHint from '../../components/ScrollHint/ScrollHint';

import styles from './Story.module.css';

import useReveal from '../../hooks/useReveal';

import { playStoryAnimation } from '../../animations/storyAnimation';

function Story() {
  const sectionRef = useReveal(playStoryAnimation);

  return (
    <section id="story" ref={sectionRef} className={styles.story}>
      <div className={`container ${styles.container}`}>
        <StoryContent />
      </div>

      <ScrollHint event="story-animation-complete" />
    </section>
  );
}

export default Story;
