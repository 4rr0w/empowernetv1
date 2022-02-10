import React from 'react';
import styles from './style.module.css';
import bar from '../../../assets/landingPage/Section4/Rectangle 365.svg';
import Group51904 from '../../../assets/landingPage/Section4/Group 51904.png';
import Group51935 from '../../../assets/landingPage/Section4/Group 51935.png';
import Group51937 from '../../../assets/landingPage/Section4/Group 51937.png';
import Group51936 from '../../../assets/landingPage/Section4/Group 51936.png';
import bead from '../../../assets/landingPage/Section4/Ellipse 149.svg';

export interface Section4Props {}

export const Section4: React.FC<Section4Props> = () => {
  return (
    <div className={styles.mainSec4}>
      <span className={styles.heading}>
        How <br />{' '}
        <span style={{ color: '#8366FE' }}>Empowernet Mentorship</span> <br />{' '}
        Works
      </span>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <img className={styles.bar} src={bar} alt="" />
          <img className={`${styles.bead}  ${styles.b1}`} src={bead} alt="" />
          <img className={`${styles.bead}  ${styles.b2}`} src={bead} alt="" />
          <img className={`${styles.bead}  ${styles.b3}`} src={bead} alt="" />
          <img className={`${styles.bead}  ${styles.b4}`} src={bead} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <img className={styles.registerImg} src={Group51904} alt="" />
            <div>
              <span
                className={styles.contentHeading}
                style={{ color: '#F1B97C' }}
              >
                Register
              </span>
              <p className={styles.contentPara}>
                Start by signing up to be either a mentor or mentee via the Sign
                up page
              </p>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <div>
              <span
                className={styles.contentHeading}
                style={{ color: '#D08CC2' }}
              >
                Empower
              </span>

              <p className={styles.contentPara}>
                To capture quantitative fluency in the desired topic of
                interest, mentees can browse through available mentors via
                distinct filters on the Empowernet homepage.
              </p>
            </div>
            <img className={styles.empowerImg} src={Group51935} alt="" />
          </div>

          <div className={styles.contentContainer}>
            <img className={styles.supportImg} src={Group51936} alt="" />
            <div>
              <span
                className={styles.contentHeading}
                style={{ color: '#7E60FE' }}
              >
                Support
              </span>

              <p className={styles.contentPara}>
                Once mentees have sent in a request, mentors will receive a
                notification and will then reach out personally to their
                mentees, to create a skill plan
              </p>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <img className={styles.organiseImg} src={Group51937} alt="" />
            <div>
              <span
                className={styles.contentHeading}
                style={{ color: '#89BDFF' }}
              >
                Organise
              </span>

              <p className={styles.contentPara}>
                Mentors and mentees can schedule meetings via the available
                calendar, which will automatically convert based on time zones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
