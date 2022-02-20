/* eslint-disable no-unused-vars */
import { Form } from 'antd';
import React, { RefObject } from 'react';
import { Progress } from '../../../components/Progress';
import { AboutMePage } from '../AboutMePage';
import { ChoosePassword } from '../ChoosePassword';
import { MentorMenteeOption } from '../MentorMenteeOption';
import { WelcomePage } from '../WelcomePage';
import styles from './style.module.css';

export interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  const scrollToDiv = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [step, setStep] = React.useState(0);

  const [optionChosen, setOptionChosen] = React.useState('');
  const welcomeRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const handelClick = (option: string) => {
    setOptionChosen(option);
    setStep(1);
    scrollToDiv(welcomeRef);
  };

  const handelNextClick = (email: string) => {
    setStep(2);
    scrollToDiv(aboutRef);
  };

  const handelNextClick2 = () => {
    setStep(3);
  };

  const handelSignUp = (password: string) => {
    console.log(password, 'signup');
  };

  const steps = [
    <MentorMenteeOption
      onOptionClick={handelClick}
      optionChosen={optionChosen}
    />,
    <WelcomePage onNextClick={handelNextClick} />,
    <AboutMePage
      mentor={optionChosen === 'mentor'}
      onNextClick={handelNextClick2}
    />,
    <ChoosePassword onNextClick={handelSignUp} />,
  ];

  return (
    <div className={styles.container}>
      <div style={{ position: 'fixed' }}>
        <Progress percent={(step / 4) * 100} color="red" />
      </div>

      <Form>
        {steps[step]}

        {/* <MentorMenteeOption
          onOptionClick={handelClick}
          optionChosen={optionChosen}
        />
        <div ref={welcomeRef} />
        <WelcomePage onNextClick={handelNextClick} />
        <div ref={aboutRef} />
        <AboutMePage mentor={optionChosen === 'mentor'} /> */}
      </Form>
    </div>
  );
};
