import styles from './Story.module.css';

function StoryContent() {
  return (
    <div className={styles.content}>
      <div className={styles.divider} data-story="divider" />

      <p className={styles.label} data-story="label">
        OUR STORY
      </p>

      <h2 className={styles.title} data-story="title">
        Two Hearts.
        <br />
        One Beautiful Journey.
      </h2>

      <p className={styles.story} data-story="paragraph">
        From two different places, beneath two different skies, Abhay and Kiruba walked their own
        paths, unaware that destiny was quietly weaving their lives together.
      </p>

      <p className={styles.story} data-story="paragraph">
        What began as a simple meeting soon blossomed into something far more meaningful—a
        connection that felt effortless, timeless, and true.
      </p>

      <p className={styles.story} data-story="paragraph">
        Today, they stand together not as two separate journeys, but as one beautiful story, ready
        to begin their forever.
      </p>

      <div className={styles.bottomDivider} data-story="ornament">
        ❦
      </div>
    </div>
  );
}

export default StoryContent;
