/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from './style.module.css';
import 'react-multi-carousel/lib/styles.css';
import { a } from '../../../data/db';
import { Cards } from '../../Cards';

export interface Section6Props {
  getRef?: Function;
}

export const Section6: React.FC<Section6Props> = ({ getRef = () => null }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

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
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.mainSec6} ref={ref}>
      <div className={styles.section}>
        <Carousel responsive={responsive} className={styles.carousel}>
          {Object.keys(a).map(() => (
            <Cards />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
