import StoryContent from './StoryContent';

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
    </section>
  );
}

export default Story;
