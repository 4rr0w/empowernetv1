/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './style.module.css';
import cshape from '../../../assets/landingPage/Section3/Combined Shape.svg';
import cshape1 from '../../../assets/landingPage/Section3/Combined Shape-1.svg';
import cshape2 from '../../../assets/landingPage/Section3/Combined Shape-2.svg';
import cshape3 from '../../../assets/landingPage/Section3/Combined Shape-3.svg';
import Group51906 from '../../../assets/landingPage/Section3/Group 51906.png';
import Group51931 from '../../../assets/landingPage/Section3/Group 51931.png';
import Group51958 from '../../../assets/landingPage/Section3/Group 51958.png';
import Group519581 from '../../../assets/landingPage/Section3/Group 51958-1.png';
import Group51960 from '../../../assets/landingPage/Section3/Group 51960.png';
import Group51962 from '../../../assets/landingPage/Section3/Group 51962.png';

export interface Section3Props {
  getRef?: Function;
}

export const Section3: React.FC<Section3Props> = ({ getRef = () => null }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);
  return (
    <div className={styles.mainSec3} ref={ref}>
      <div className={styles.skillsContainer}>
        <p className={styles.heading}>WHY EMPOWERNET?</p>
        <img className={styles.cshape3} alt="" src={cshape3} />
        <img className={styles.skills} alt="" src={Group51958} />
        <img className={styles.girl} alt="" src={Group51906} />
        <div className={styles.skillsText}>
          <span className={styles.subheading}>Skills Of Interest</span>
          <p className={styles.para}>
            Capture quantitative skills of interest, or those complimentary to
            academic or career subjects.
          </p>
        </div>
      </div>
      <div className={styles.mentorsContainer}>
        <img className={styles.group} alt="" src={Group51931} />
        <div className={styles.mentorsText}>
          <span className={styles.subheading}>Female Mentors</span>
          <p className={styles.para}>
            Address crucial quantitative skill gaps with personalized mentorship
            from female mentors, both domestically and worldwide.
          </p>
        </div>
      </div>
      <div className={styles.directSupportContainer}>
        <img className={styles.cshape} alt="" src={cshape} />
        <img className={styles.window} alt="" src={Group51960} />
        <div className={styles.directSupportText}>
          <span className={styles.subheading}>Direct Skill Support</span>
          <p className={styles.para}>
            Access detailed resource documents in distinct subjects that provide
            more direct skill support.
            <br /> <br />
            Drop in any question in the Q+A chat box and receive high-quality,
            reliable information from experts across the Empowernet community,
            and follow topics that interest you.
          </p>
        </div>
      </div>
      <div className={styles.languageContainer}>
        <img className={styles.cshape1} alt="" src={cshape1} />
        <img className={styles.ftfwindow} alt="" src={Group51958} />
        <div className={styles.languageText}>
          <span className={styles.subheading}>
            Talk In Your Language Face-To-Faces
          </span>
          <p className={styles.para}>
            Choose the main language of the app and mentors in the language you
            feel most comfortable with and talk to them face-to-face for the
            time they are available.
          </p>
        </div>
      </div>
      <div className={styles.reliableContainer}>
        <img className={styles.cshape2} alt="" src={cshape2} />
        <img className={styles.infowindow} alt="" src={Group51962} />
        <div className={styles.reliableText}>
          <span className={styles.subheading}>Reliable Information</span>
          <p className={styles.para}>
            Drop in any question in the Q+A chat box and receive high-quality,
            reliable information from experts across the Empowernet community,
            and follow topics that interest you.
          </p>
        </div>
      </div>
    </div>
  );
};
