/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  StarFilled,
  DeleteFilled,
  HeartFilled,
  WechatFilled,
  PhoneFilled,
  VideoCameraFilled,
  CheckSquareOutlined,
  ShoppingFilled,
  FileAddFilled,
} from '@ant-design/icons';
import styles from './style.module.css';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';

export interface MentorCardProps {
  a?: { name: string; info: string; img_link: string };
}

export const MentorCard: React.FC<MentorCardProps> = ({
  a = {
    name: 'Fredia Gibbs',
    info: 'With a decade of product management experience in companies across Europe and the US, I am hoping to share my knowledge and support to other product people by creating a tailored coaching program according to needs and goals.',
    img_link: '../../assets/landingPage/Section6/MaskGroup2.png',
  },
}) => {
  return (
    <div className={styles.mainSec}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.bio}>
            <div>
              <img className={styles.img} src={Maskgrp2} />
            </div>
            <div className={styles.container2}>
              <div className={styles.desc}>
                <div>
                  <p className={styles.name}>{a.name} &nbsp;</p>
                </div>
                <div>
                  <p className={styles.textshort}>
                    &nbsp; &ensp; &nbsp; &ensp;English
                  </p>
                </div>
                <div>
                  <DeleteFilled />
                </div>
                <div>
                  <StarFilled />
                </div>
              </div>

              <p className={styles.text2}>
                <b>Head of product</b>- Search & Find-ability at <b>ABD</b>
              </p>
              <div className={styles.stars}>
                <div>
                  <StarFilled />
                </div>
                <div>
                  <StarFilled />
                </div>
                <div>
                  <StarFilled />
                </div>
                <div>
                  <StarFilled />
                </div>
                <div>
                  <StarFilled />
                </div>
              </div>
            </div>
          </div>
          <div>buttons</div>
          <div>
            <p className={styles.info}>
              {a.info}
              <br />
              <br />
              {a.info}
            </p>
          </div>
        </div>
        <div className={styles.contact}>
          <HeartFilled className={styles.sideicon1} />
          <p className={styles.texticon}> like</p>
          <WechatFilled className={styles.sideicon} />
          <p className={styles.texticon}> Chat</p>
          <PhoneFilled className={styles.sideicon} />
          <p className={styles.texticon}>Call</p>
          <VideoCameraFilled className={styles.sideicon} />
          <p className={styles.texticon}>Video Call</p>
          <CheckSquareOutlined className={styles.sideicon} />
          <p className={styles.texticon}>Tasks</p>
          <ShoppingFilled className={styles.sideicon} />
          <p className={styles.texticon}>Hands on</p>
          <FileAddFilled className={styles.sideicon} />
          <p className={styles.texticon}>Resources</p>
        </div>
      </div>
    </div>
  );
};
