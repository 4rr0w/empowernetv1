/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css';
import BottomShadow from '../../../assets/landingPage/Section8/Bottom Shadow.svg';
import Group18 from '../../../assets/landingPage/Section8/Group 18.svg';
import Group51919 from '../../../assets/landingPage/Section8/Group 51919.svg';
import Rectangle from '../../../assets/landingPage/Section8/Rectangle 71.svg';

export interface Section8Props {
  text?: string;
  getRef?: Function;
}

export const Section8: React.FC<Section8Props> = ({
  text = 'We built Empowernet because we know that successful Mentorship can be truly life-changing-for both parties. The only problem? Mentorship today is often locked behind Endless MOOC courses, bootcamps, and Video programs, totally missing the most important thing: 1-on1 interaction. on long-term mentorship, but we also know that a single meeting can sometimes be all you need. With that in mind we have developed one time guidance plan.',
  getRef = () => null,
}) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);
  return (
    <div className={styles.mainSec8} ref={ref}>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <img className={styles.logo} src={Group51919} alt="" />
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.social}>
          <img className={styles.footerLogo} src={Group18} />
          <div className={styles.sociallinks}>
            <div className={styles.icon1}>
              <MailFilled />
              <p className={styles.text4}>contact@empowernetmentoring.com</p>
            </div>
            <div className={styles.icon1}>
              <LinkedinFilled />
              <p className={styles.text4}>Empowernet Organisation</p>
            </div>
            <div className={styles.icon1}>
              <InstagramOutlined />
              <p className={styles.text4}>empowernet_mentorship</p>
            </div>
            <div className={styles.icon1}>
              <FacebookFilled />
              <p className={styles.text4}>@empowernet_mentorship</p>
            </div>
            <div className={styles.icon1}>
              <TwitterCircleFilled />
              <p className={styles.text4}>@empowernet_mentorship</p>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.linkContainer}>
            <p className={styles.text2}>HOME</p>
            <p className={styles.text3}>Find Mentor</p>
            <p className={styles.text3}>Quilk Chat</p>
          </div>
          <div className={styles.linkContainer}>
            <p className={styles.text2}>PLATFORM</p>
            <p className={styles.text3}>Internet Curation</p>
            <p className={styles.text3}>Community Forum</p>
            <p className={styles.text3}>Showcase</p>
          </div>
          <div className={styles.linkContainer}>
            <p className={styles.text2}>SERVICES</p>
            <p className={styles.text3}>Contact Us</p>
            <p className={styles.text3}>Podcast</p>
            <p className={styles.text3}>Webinars</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.copyright}>
        <p>
          &copy; 2021 Empowernet Mentoring. All rights reserved. Terms &
          Conditions | Policy
        </p>
      </div> */}
    </div>
  );
};
