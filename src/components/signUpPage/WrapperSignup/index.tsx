import React, { ReactNode, useRef } from 'react';
import styles from './style.module.css';

export interface WrapperSignupProps {
  getRef?: Function;
  component?: ReactNode;
  heading?: string;
  para?: string;
}

export const WrapperSignup: React.FC<WrapperSignupProps> = ({
  getRef = () => null,
  component,
  heading = '',
  para = '',
}) => {
  const ref = useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.content}>
        <span className={styles.heading}>{heading}</span>
        <span className={styles.para}>{para}</span>
      </div>

      <div className={styles.inputContainer}>{component}</div>
    </div>
  );
};
