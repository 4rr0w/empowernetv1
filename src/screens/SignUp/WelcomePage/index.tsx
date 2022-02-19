import React, { useRef } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CustomButton } from '../../../components/CustomButton';
import { InputWithIcon } from '../../../components/InputWithIcon';
import styles from './style.module.css';

export interface WelcomePageProps {
  getRef?: Function;
  onNextClick?: Function;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({
  getRef = () => null,
  onNextClick = () => null,
}) => {
  const ref = useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);
  const [email, setEmail] = React.useState('');
  return (
    <div className={styles.container} ref={ref}>
      <span className={styles.heading}>Welcome</span>
      <div className={styles.content}>
        <span className={styles.para}>
          We have set this up to give you a space to explore and play with our
          community platform.
        </span>
        <div className={styles.inputContainer}>
          <div className={styles.box} />
          <InputWithIcon
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            icon={
              <MdOutlineMailOutline style={{ fontSize: 'min(25px, 4vw)' }} />
            }
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="Email Address"
          />

          <CustomButton
            onClick={() => onNextClick(email)}
            size="large"
            block
            text="Next"
            style={{
              marginTop: '2vw',
              padding: '2vw',
              fontSize: 'min(16px,2vw)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
