/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './style.module.css';
import Group51938 from '../../../assets/landingPage/Section5/Group 51938.png';
import Group51940 from '../../../assets/landingPage/Section5/Group 51940.png';
import Group51956 from '../../../assets/landingPage/Section5/Group 51956.png';
import Maskgrp30 from '../../../assets/landingPage/Section5/MaskGroup30.png';
import Maskgrp32 from '../../../assets/landingPage/Section5/MaskGroup32.png';

export interface Section5Props {
  text?: string;
  getRef?: Function;
}

export const Section5: React.FC<Section5Props> = ({
  text = 'Industry-leading advice and from our mentors',
  getRef = () => null,
}) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  return (
    <div className={styles.mainSec5} ref={ref}>
      <h1 className={styles.text}>{text}</h1>
      <p className={styles.subtext}>
        Your mentor will offer guidance where they see opportunity, and even
        push you to do amazing things you probably thought you couldn’t. Whether
        that’s switching careers or simply preparing for a personal project, our
        mentors are like having an accountability partner in your pocket.
      </p>

      <div className={styles.contentContainer}>
        <img className={styles.bgimg1} src={Group51938} />
        <img className={styles.bgimg2} src={Group51940} />
        <img className={styles.bgimg3} src={Group51956} />
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.mentorimg1} src={Maskgrp30} />
            <p className={styles.name}>Aditya Singh</p>
            <p className={styles.info}>Product Manager and Mentor</p>
          </div>
          <p className={styles.mentortext}>
            “ I had several calls with mentees this week, and every single one
            of them has been insightful, cheerful, uplifting, and full of ideas
            being exchanged.”
          </p>
        </div>
        <div className={styles.container2}>
          <div className={styles.text2Container}>
            <p className={styles.mentortext3}>
              “ I had several calls with mentees this week, and every single one
              of them has been insightful, cheerful, uplifting, and full of
              ideas being exchanged.”
            </p>
            <p className={styles.name}>Aditya Singh</p>
            <p className={styles.info}>Product Manager and Mentor</p>
          </div>
          <div className={styles.content2}>
            <img className={styles.mentorimg3} src={Maskgrp32} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.mentorimg1} src={Maskgrp30} />
            <p className={styles.name}>Aditya Singh</p>
            <p className={styles.info}>Product Manager and Mentor</p>
          </div>
          <p className={styles.mentortext}>
            “ I had several calls with mentees this week, and every single one
            of them has been insightful, cheerful, uplifting, and full of ideas
            being exchanged.”
          </p>
        </div>
      </div>
    </div>
  );
};
