import React from 'react';
import styles from './style.module.css';
import Group51957 from '../../../assets/landingPage/Section1/Group 51957.png';
import Group51855 from '../../../assets/landingPage/Section1/Group 51855.png';
import Group51941 from '../../../assets/landingPage/Section1/Group 51941.png';

export interface Section1Props {}

export const Section1: React.FC<Section1Props> = () => {
  return (
    <div className={styles.mainSec1}>
      <div className={styles.topContainer}>
        <img className={styles.graphics} alt="" src={Group51957} />
        <img className={styles.girl} alt="" src={Group51855} />
        <img className={styles.hiddenTop} alt="" src={Group51855} />
      </div>
      <div className={styles.bottomContainer}>
        <img className={styles.rocket} alt="" src={Group51941} />
      </div>
    </div>
  );
};
