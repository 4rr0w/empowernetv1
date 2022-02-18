/* eslint-disable no-unused-vars */
import React, { RefObject } from 'react';
import { AboutMePage } from '../AboutMePage';
import { MentorMenteeOption } from '../MentorMenteeOption';
import { WelcomePage } from '../WelcomePage';
import styles from './style.module.css';

export interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const scrollToDiv = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const [welcomRef, setWelcomeRef] = React.useState<RefObject<null>>();
  // const [aboutRef, setAboutRef] = React.useState<RefObject<null>>();

  const [optionChosen, setOptionChosen] = React.useState('');
  const welcomeRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const handelClick = (option: string) => {
    setOptionChosen(option);
    scrollToDiv(welcomeRef);
  };

  const handelNextClick = (email: string) => {
    scrollToDiv(aboutRef);
  };

  return (
    <div className={styles.container}>
      <MentorMenteeOption
        onOptionClick={handelClick}
        optionChosen={optionChosen}
      />
      <div ref={welcomeRef} />
      <WelcomePage onNextClick={handelNextClick} />
      <div ref={aboutRef} />
      <AboutMePage mentor={optionChosen === 'mentor'} />
    </div>
  );
};
