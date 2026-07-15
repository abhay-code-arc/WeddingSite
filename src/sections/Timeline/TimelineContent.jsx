import { HiOutlineMapPin } from 'react-icons/hi2';

import siteData from '../../constants/siteData';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

import styles from './Timeline.module.css';

function TimelineContent() {
  return (
    <div className={styles.content}>
      <SectionHeading label="THE CELEBRATION" />

      <div className={styles.timelineWrapper}>
        <div className={styles.line} data-line />

        {siteData.events.map((event) => (
          <div key={event.id} className={styles.event} data-event>
            <div className={styles.dot} />

            <h3 className={styles.title}>{event.title}</h3>

            <p className={styles.date}>{event.date}</p>

            <p className={styles.time}>{event.time}</p>

            <div className={styles.location}>
              <div className={styles.addressRow}>
                <HiOutlineMapPin className={styles.locationIcon} />

                <span>{event.address.line1}</span>
              </div>

              <div className={styles.addressLine}>{event.address.line2}</div>
            </div>

            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <HiOutlineMapPin className={styles.mapIcon} />
              <span>View Location</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineContent;
