/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-multi-carousel';
import styles from './style.module.css';
import Group51950 from '../../../assets/landingPage/Section6/Group 51950.png';
import 'react-multi-carousel/lib/styles.css';

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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const a = {
    0: {
      image_link: '',
      text: '',
      name: '',
    },
    1: { image_link: '', text: '', name: '' },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {/* {
          Object.keys(a).map(enrtry => {
            return(
              <div >
                <img src={ennrty}

              </div>
            )
          })
        } */}
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </div>
  );
};
