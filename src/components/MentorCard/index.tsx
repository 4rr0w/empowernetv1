/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  StarFilled,
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
import { CustomButton } from '../CustomButton';

export interface MentorCardProps {
  mentor?: {
    name: string;
    education: string;
    profession: string;
    bio: string;
    img_link: string;
    skills: string[];
    stars: number;
  };
}

export const MentorCard: React.FC<MentorCardProps> = ({
  mentor = {
    name: 'Fredia Gibbs',
    education: 'Btech',
    profession: 'Product Manager',
    skills: ['Python', 'Cpp'],
    bio: 'With a decade of product management experience in companies across Europe and the US, I am hoping to share my knowledge and support to other product people by creating a tailored coaching program according to needs and goals.',
    img_link: '../../assets/landingPage/Section6/MaskGroup2.png',
    stars: 4,
  },
}) => {
  return (
    <div className={styles.mainSec}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.img} src={Maskgrp2} />
          <div className={styles.desc}>
            <p className={styles.name}>
              {mentor.name}
              <div className={styles.stars}>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
            </p>
            <p className={styles.text2}>
              <b>Head of product</b>- Search & Find-ability at <b>ABD</b>
            </p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.tags}>
            {mentor.skills.map((tag) => {
              return (
                <CustomButton
                  className={styles.tag}
                  onClick={() => {}}
                  size="middle"
                  text={tag}
                />
              );
            })}
          </div>
          <p className={styles.bio}>{mentor.bio}</p>
        </div>
      </div>
      <div className={styles.contact}>
        <div>
          <HeartFilled className={styles.sideicon} />
          <p className={styles.texticon}> like</p>
        </div>
        <div>
          <WechatFilled className={styles.sideicon} />
          <p className={styles.texticon}> Chat</p>
        </div>
        <div>
          <PhoneFilled className={styles.sideicon} />
          <p className={styles.texticon}>Call</p>
        </div>
        <div>
          <VideoCameraFilled className={styles.sideicon} />
          <p className={styles.texticon}>Video Call</p>
        </div>
        <div>
          <CheckSquareOutlined className={styles.sideicon} />
          <p className={styles.texticon}>Tasks</p>
        </div>
        <div>
          <ShoppingFilled className={styles.sideicon} />
          <p className={styles.texticon}>Hands on</p>
        </div>
        <div>
          {' '}
          <FileAddFilled className={styles.sideicon} />
          <p className={styles.texticon}>Resources</p>{' '}
        </div>
      </div>
    </div>
  );
};
