import { HiOutlinePhone } from 'react-icons/hi2';

import siteData from '../../constants/siteData';

import styles from './Closing.module.css';

function ClosingContent() {
  const { closing } = siteData;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.divider} closing-divider`} />

        <div className={styles.message}>
          {closing.message.map((paragraph) => (
            <p key={paragraph} className={`${styles.paragraph} closing-paragraph`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={`${styles.assistance} closing-assistance`}>
          <h3 className={styles.title}>{closing.assistance.title}</h3>

          <p className={styles.subtitle}>{closing.assistance.subtitle}</p>

          <div className={styles.contacts}>
            {closing.contacts.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className={`${styles.contact} closing-contact`}
              >
                <HiOutlinePhone className={styles.icon} />

                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={`${styles.endDivider} closing-divider`} />
      </div>
    </div>
  );
}

export default ClosingContent;
