import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { InputWithIcon } from '../../../components/InputWithIcon';
import styles from './style.module.css';

export interface WelcomePageProps {}

export const WelcomePage: React.FC<WelcomePageProps> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>Welcome</span>
      <div className={styles.content}>
        <span className={styles.para}>
          We have set this up to give you a space to explore and play with our
          community platform.
        </span>
        <div className={styles.inputContainer}>
          <InputWithIcon
            className={styles.input}
            icon={
              <MdOutlineMailOutline style={{ fontSize: 'min(25px, 4vw)' }} />
            }
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="Email Address"
          />
          <div className={styles.box} />
        </div>
      </div>
    </div>
  );
};
