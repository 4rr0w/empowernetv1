import React from 'react';
import {
  MdAdd,
  MdLanguage,
  MdLocationCity,
  MdMap,
  MdPhone,
  MdPlace,
  MdSchool,
} from 'react-icons/md';
import { InputWithIcon } from '../../../components/InputWithIcon';
import styles from './style.module.css';

export interface AboutMePageProps {}

export const AboutMePage: React.FC<AboutMePageProps> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>About me</span>
      <p className={styles.para}>
        Provide us with more information about yourself.
      </p>
      <div className={styles.content}>
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
          <div className={styles.box} />
        </div>

        <div className={styles.row}>
          <InputWithIcon
            className={styles.input}
            icon={<MdLocationCity style={{ fontSize: 'min(25px, 4vw)' }} />}
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="City"
          />
          <InputWithIcon
            className={styles.input}
            icon={<MdMap style={{ fontSize: 'min(25px, 4vw)' }} />}
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="State"
          />
          <div className={styles.box} />
        </div>
        <InputWithIcon
          className={styles.input}
          icon={<MdPlace style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Country"
        />
        <InputWithIcon
          className={styles.input}
          icon={<MdPhone style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Phone"
        />
        <InputWithIcon
          className={styles.input}
          icon={<MdSchool style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Education"
        />

        <InputWithIcon
          className={styles.input}
          icon={<MdLanguage style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Languages"
        />
      </div>
    </div>
  );
};
