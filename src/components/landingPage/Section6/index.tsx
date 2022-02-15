/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from './style.module.css';
import Group51950 from '../../../assets/landingPage/Section6/Group 51950.png';
import Group51946 from '../../../assets/landingPage/Section6/Group 51946.png';
import Maskgrp2 from '../../../assets/landingPage/Section6/MaskGroup2.png';
import 'react-multi-carousel/lib/styles.css';
import { a } from '../../../data/db';

export interface Section6Props {}

export const Section6: React.FC<Section6Props> = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={styles.mainSec6}>
      <div className={styles.section}>
        <Carousel responsive={responsive} className={styles.carousel}>
          {Object.keys(a).map(() => {
            return (
              <div className={styles.container}>
                <img className={styles.cards} src={Group51950} />
                <div className={styles.cardspart}>
                  <img className={styles.img} src={Maskgrp2} />
                  <p className={styles.text}>{a[0].text}</p>
                  <p className={styles.name}>{a[0].name}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
