import React from 'react';
import styles from './style.module.css';
import Group51925 from '../../../assets/landingPage/Section2/Group 51925.png';
import Group51926 from '../../../assets/landingPage/Section2/Group 51926.png';
import logo from '../../../assets/logo/logo.svg';
import { CustomButton } from '../../CustomButton';

export interface Section2Props {
  getRef?: Function;
}

export const Section2: React.FC<Section2Props> = ({ getRef = () => {} }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  const list: string[] = [
    'SKILLS OF INTEREST',
    'PERSONALISED',
    'WORLD WIDE',
    'YOUR LANGUAGE',
    'YOUR LANGUAGE',
  ];
  return (
    <div className={styles.mainSec2} ref={ref}>
      <div className={styles.container}>
        <img className={styles.background} alt="" src={Group51926} />
        <img className={styles.laptop} alt="" src={Group51925} />
        <img className={styles.backgroundHidden} alt="" src={Group51926} />
        <div className={styles.aboutPlatform}>
          <p className={styles.heading}>Platform</p>
          <p className={styles.about}>
            In a growing tech-based society that relies heavily on quantitative
            fluency, we help young women build and uncover essential
            quantitative skills in distinct fields, which are necessary to open
            pathways to increased academic and economic participation.{' '}
          </p>
          <CustomButton
            className={styles.button}
            isSecondary
            onClick={() => {}}
            size="large"
            text="Sign Up"
          />
        </div>
      </div>
      <div className={styles.listContainer}>
        <img className={styles.logo} src={logo} alt="" />
        <p className={styles.heading2}>A flexible solution designed for you.</p>
        <div className={styles.list}>
          {list.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
