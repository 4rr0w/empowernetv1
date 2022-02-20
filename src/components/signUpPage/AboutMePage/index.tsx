import React from 'react';
import { MdAdd, MdLanguage, MdPlace, MdSchool, MdWork } from 'react-icons/md';
import { CustomButton } from '../../CustomButton';
import { InputWithIcon } from '../../InputWithIcon';
import styles from './style.module.css';

export interface AboutMePageProps {
  getRef?: Function;
  mentor?: boolean;
  onNextClick?: Function;
}

export const AboutMePage: React.FC<AboutMePageProps> = ({
  getRef = () => null,
  mentor = false,
  onNextClick = () => null,
}) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  return (
    <div>
      <div className={styles.row}>
        <InputWithIcon
          className={styles.input}
          icon={<MdAdd style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="First Name"
        />
        <InputWithIcon
          className={styles.input}
          icon={<MdAdd style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Last Name"
        />
      </div>
      <InputWithIcon
        className={styles.input}
        icon={<MdPlace style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Country"
      />
      <InputWithIcon
        className={styles.input}
        icon={<MdSchool style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Highest Education"
      />
      {mentor && (
        <InputWithIcon
          className={styles.input}
          icon={<MdWork style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Profession"
        />
      )}

      <InputWithIcon
        className={styles.input}
        icon={<MdLanguage style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Languages"
      />
      <CustomButton
        block
        onClick={() => onNextClick()}
        size="large"
        text="Next"
        style={{
          marginTop: '2vw',
          padding: '2vw',
          fontSize: 'min(16px,2vw)',
        }}
      />
    </div>
  );
};
