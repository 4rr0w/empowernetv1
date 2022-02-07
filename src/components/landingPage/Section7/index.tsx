import React from 'react';
import { CustomButton } from '../../CustomButton';
import styles from './style.module.css';

export interface Section7Props {
  text?: string;
}

export const Section7: React.FC<Section7Props> = ({
  text = 'Our platforms focuses on long-term mentorship, but we also know that a single meeting can sometimes be all you need. With that in mind we have developed one time guidance plan.',
}) => {
  return (
    <div className={styles.mainSec7}>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttons}>
        <CustomButton onClick={() => {}} size="middle" text="Book a Demo" />
        <CustomButton
          isSecondary
          onClick={() => {}}
          size="large"
          text="Sign Up"
        />
      </div>
    </div>
  );
};
