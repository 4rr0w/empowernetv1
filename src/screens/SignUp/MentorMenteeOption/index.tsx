import React from 'react';
import { CustomButton } from '../../../components/CustomButton';
import styles from './style.module.css';

export interface MentorMenteeOptionProps {
  onOptionClick?: Function;
  optionChosen?: string;
}

export const MentorMenteeOption: React.FC<MentorMenteeOptionProps> = ({
  onOptionClick = () => {},

  optionChosen = 'mentee',
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}> Choose account type </span>
      <br />
      <div className={styles.row}>
        <CustomButton
          onClick={() => onOptionClick('mentor')}
          style={{
            marginTop: '2vw',
            padding: '2vw',
            fontSize: 'min(16px,2vw)',
            background: `${
              optionChosen === 'mentor' ? '#7C1BD1' : 'transparent'
            } 0% 0% no-repeat padding-box`,
            border: 'min(2px, 1vw) solid #D8D8D8',
          }}
          text="Mentor"
        />

        <CustomButton
          onClick={() => onOptionClick('mentee')}
          style={{
            marginTop: '2vw',
            padding: '2vw',
            fontSize: 'min(16px,2vw)',
            background: `${
              optionChosen === 'mentee' ? '#7C1BD1' : 'transparent'
            } 0% 0% no-repeat padding-box`,
            border: 'min(2px, 1vw) solid #D8D8D8',
          }}
          text="Mentee"
        />
      </div>
    </div>
  );
};
