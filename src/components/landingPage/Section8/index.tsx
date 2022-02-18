/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

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
      <img className={styles.bottomShadow} src={BottomShadow} alt="" />
      <div className={styles.bottomNav}>
        <div className={styles.logonav}>
          <img className={styles.rectangle} src={Rectangle} />
          <img className={styles.grp18} src={Group18} />
          <div />
        </div>
        <div className={styles.sociallinks}>
          <div>
            <div className={styles.icon1}>
              <MailFilled />
              <p className={styles.text4}>info@empowernet.app</p>
            </div>
            <div className={styles.icon1}>
              <PhoneFilled />
              <p className={styles.text4}>+99 999 999 999</p>
            </div>
          </div>

          <div className={styles.icon1}>
            <InstagramOutlined />
            <p className={styles.text4}>link</p>
          </div>
          <div className={styles.icon1}>
            <FacebookFilled />
            <p className={styles.text4}>link</p>
          </div>
          <div className={styles.icon1}>
            <TwitterCircleFilled />
            <p className={styles.text4}>link</p>
          </div>
        </div>
        <div className={styles.home}>
          <p className={styles.text2}>HOME</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
        </div>
        <div className={styles.platforms}>
          <p className={styles.text2}>PLATFORM</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
        </div>
        <div className={styles.services}>
          <p className={styles.text2}>SERVICES</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
          <p className={styles.text3}>Footer Link</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; 2021 Company LTD. All rights reserved. Terms & Conditions |
          Policy
        </p>
      </div>
    </div>
  );
};
