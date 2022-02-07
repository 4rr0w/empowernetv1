/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './style.module.css';
import BottomShadow from '../../../assets/landingPage/Section8/Bottom Shadow.svg';
import Group18 from '../../../assets/landingPage/Section8/Group 18.svg';
import Group51919 from '../../../assets/landingPage/Section8/Group 51919.svg';
import Rectangle from '../../../assets/landingPage/Section8/Rectangle 71.svg';

export interface Section8Props {
  text?: string;
}

export const Section8: React.FC<Section8Props> = ({
  text = 'Our platforms We built Empowernet because we know that successful Mentorship can be truly life-changing-for both parties. The only problem? Mentorship today is often locked behind Endless MOOC courses, bootcamps, and Video programs, totally missing the most important thing: 1-on1 interaction. on long-term mentorship, but we also know that a single meeting can sometimes be all you need. With that in mind we have developed one time guidance plan.',
}) => {
  return (
    <div className={styles.mainSec8}>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <img className={styles.logo} src={Group51919} alt="" />
      </div>
      <div className={styles.bottomNav} />
      <img className={styles.bottomShadow} src={BottomShadow} alt="" />
    </div>
  );
};
