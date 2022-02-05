import React from 'react';
import styles from './style.module.css';
import Group51925 from '../../../assets/landingPage/Section2/Group 51925.png';
import Group51926 from '../../../assets/landingPage/Section2/Group 51926.png';

export interface Section2Props {}

export const Section2: React.FC<Section2Props> = () => {
  return (
    <div className={styles.mainSec2}>
      <div className={styles.container}>
        <img className={styles.background} alt="" src={Group51926} />
        <img className={styles.laptop} alt="" src={Group51925} />
        <img className={styles.backgroundHidden} alt="" src={Group51926} />
      </div>
    </div>
  );
};
