/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'antd';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';

export interface CardsProps {
  a?: { image_link: string; text: string; name: string };
}

export const Cards: React.FC<CardsProps> = ({
  a = {
    image_link: '../../../assets/landingPage/Section6/MaskGroup2.png',
    text: 'Use Notebooks, Worksflows, and Deployments together or Independently. Use Notebooks, Worksflows, and Deployments together or Independently. Use Notebooks, Worksflows, and Deployments together or Independently.',
    name: 'Alisher Abdulkhaev',
  },
}) => {
  return (
    <div className={styles.container} style={{ background: Group51950 }}>
      <div className={styles.card}>
        <img className={styles.img} src={Maskgrp2} alt="" />
        <p className={styles.text}>{a.text}</p>
        <p className={styles.name}>{a.name}</p>
      </div>
    </div>
  );
};
