import React, { RefObject } from 'react';
import { MentorMenteeOption } from '../MentorMenteeOption';
import { WelcomePage } from '../WelcomePage';
import styles from './style.module.css';

export interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const scrollToDiv = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [welcomRef, setWelcomeRef] = React.useState<RefObject<null>>();

  const [optionChosen, setOptionChosen] = React.useState('');
  const handelClick = (option: string) => {
    setOptionChosen(option);
    scrollToDiv(welcomRef);
  };
  return (
    <div className={styles.container}>
      <MentorMenteeOption
        onOptionClick={handelClick}
        optionChosen={optionChosen}
      />
      <WelcomePage getRef={(r: any) => setWelcomeRef(r)} />
    </div>
  );
};
