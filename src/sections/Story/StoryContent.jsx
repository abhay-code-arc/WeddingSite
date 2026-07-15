import siteData from '../../constants/siteData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

import styles from './Story.module.css';

function StoryContent() {
  return (
    <div className={styles.content}>
      <SectionHeading label="OUR STORY" />

      <div className={styles.storyWrapper}>
        <div className={styles.storyContent}>
          {siteData.story.content.map((paragraph, index) => (
            <p key={index} className={`${styles.paragraph} story-paragraph`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryContent;
