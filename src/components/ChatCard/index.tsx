/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'antd';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';

export interface ChatCardProps {
  align?: 'left' | 'right';
  data?: {
    time: string;
    type?: 'text' | 'image';
    image?: string;
    msg: string;
    name: string;
  };
}

export const ChatCard: React.FC<ChatCardProps> = ({
  align = 'left',
  data = {
    type: 'text',
  },
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.time}> {data.time} </span>
      <p>{data.type === 'text' ? data.msg : <img src={data.image} />}</p>
    </div>
  );
};
