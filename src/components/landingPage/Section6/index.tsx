/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import ReactDOM, { render } from 'react-dom';
import styles from './style.module.css';
import Group51950 from '../../../assets/landingPage/Section6/Group 51950.png';

export interface Section6Props {
  text?: string;
}

export const Section6: React.FC<Section6Props> = ({
  text = 'Our platforms focuses on long-term mentorship, but we also know that a single meeting can sometimes be all you need. With that in mind we have developed one time guidance plan.',
}) => {
  return (
    <div>
      {text}
      <OwlCarousel items={3} margin={8} autoplay>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
        <div>
          <img className={styles.img} src={Group51950} />
        </div>
      </OwlCarousel>
      {/* <div>
        <div className="container-fluid">
          <div className="row title" style={{ marginBottom: '20px' }}>
            <div className="col-sm-12 btn btn-info">
              Owl Carousel with Auto Play Property In React Application
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <OwlCarousel items={3} margin={8} autoplay>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
            <div>
              <img className={styles.img} src={Group51950} />
            </div>
          </OwlCarousel>
        </div>
      </div> */}
    </div>
  );
};
