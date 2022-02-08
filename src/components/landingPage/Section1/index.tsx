import React from 'react';
import { MdSearch } from 'react-icons/md';
import styles from './style.module.css';
import Group51957 from '../../../assets/landingPage/Section1/Group 51957.png';
import Group51855 from '../../../assets/landingPage/Section1/Group 51855.png';
import Group51941 from '../../../assets/landingPage/Section1/Group 51941.png';
import { CustomButton } from '../../CustomButton';

export interface Section1Props {}

export const Section1: React.FC<Section1Props> = () => {
  const tags: { [key: string]: string[] } = {
    Mathematics: ['#7E60FF', '/path'],
    CS: ['#8BC5FF', '/path'],
    Engineering: ['#F7DB42', '/path'],
    'Machine Learning': ['#EC9CAE', '/path'],
  };

  return (
    <div className={styles.mainSec1}>
      <div className={styles.topContainer}>
        <img className={styles.graphics} alt="" src={Group51957} />
        <img className={styles.girl} alt="" src={Group51855} />
        <p className={styles.empowernet}>EMPOWERNET</p>
        <p className={styles.subheading}>
          Mentorship
          <br />
          without
          <br />
          borders
        </p>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            placeholder="Try “Mathematics“ or “Computer Science”"
          />
          <CustomButton
            className={styles.findButton}
            iconRight
            onClick={() => {}}
            prefixIcon={
              <MdSearch
                fontSize={27}
                style={{ marginLeft: '5px', fontSize: 'min(3vw, 34px)' }}
              />
            }
            size="middle"
            style={{
              padding: '13px 16px',
            }}
            text="Find Mentor"
          />
        </div>
        <div className={styles.tags}>
          {Object.keys(tags).map((tag) => {
            return (
              <CustomButton
                className={styles.tag}
                onClick={() => {}}
                size="middle"
                text={tag}
                gradient={[tags[tag][0], tags[tag][0]]}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <img className={styles.rocket} alt="" src={Group51941} />
      </div>
    </div>
  );
};
