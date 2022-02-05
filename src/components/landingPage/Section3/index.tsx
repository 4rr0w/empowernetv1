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

export interface Section3Props {}

export const Section3: React.FC<Section3Props> = () => {
  return (
    <div className={styles.mainSec3}>
      <div className={styles.skillsContainer}>
        <img className={styles.cshape3} alt="" src={cshape3} />
        <img className={styles.skills} alt="" src={Group51958} />
        <img className={styles.girl} alt="" src={Group51906} />
        <img className={styles.cshape3Hidden} alt="" src={cshape3} />
      </div>
    </div>
  );
};
