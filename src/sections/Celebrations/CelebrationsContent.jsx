import SectionHeading from '../../components/SectionHeading/SectionHeading';

import siteData from '../../constants/siteData';

import styles from './Celebrations.module.css';

function CelebrationCard({ event }) {
  return (
    <article className={`${styles.card} celebration-card`}>
      <div className={styles.topLine} />

      <h3 className={styles.title}>{event.title}</h3>

      <p className={styles.date}>{event.date}</p>

      <p className={styles.time}>{event.time}</p>

      <p className={styles.venue}>{event.venue}</p>

      <div className={styles.bottomLine} />
    </article>
  );
}

function CelebrationsContent() {
  return (
    <>
      <SectionHeading
        label="CELEBRATIONS"
        title={
          <>
            The Moments
            <br />
            We'll Cherish
          </>
        }
        subtitle="Three beautiful occasions. One unforgettable celebration."
      />

      <div className={styles.cards}>
        {siteData.events.map((event) => (
          <CelebrationCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}

export default CelebrationsContent;
