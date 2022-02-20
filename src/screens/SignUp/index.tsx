/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { Form } from 'antd';
import React, { ReactNode, RefObject } from 'react';
import { Progress } from '../../components/Progress';
import { AboutMePage } from '../../components/signUpPage/AboutMePage';
import { ChoosePassword } from '../../components/signUpPage/ChoosePassword';
import { MentorMenteeOption } from '../../components/signUpPage/MentorMenteeOption';
import { WelcomePage } from '../../components/signUpPage/WelcomePage';
import { WrapperSignup } from '../../components/signUpPage/WrapperSignup';
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

  const steps: {
    [key: number]: { heading: string; para?: string; component: ReactNode };
  } = {
    0: {
      heading: 'Choose account type',
      component: (
        <MentorMenteeOption
          onOptionClick={handelClick}
          optionChosen={optionChosen}
        />
      ),
    },
    1: {
      heading: 'Welcome',
      component: <WelcomePage onNextClick={handelNextClick} />,
    },
    2: {
      heading: 'About you',
      component: (
        <AboutMePage
          mentor={optionChosen === 'mentor'}
          onNextClick={handelNextClick2}
        />
      ),
    },
    3: {
      heading: 'Choose account type',
      component: <ChoosePassword onNextClick={handelSignUp} />,
    },
  };

  return <WrapperSignup {...steps[step]} />;
};
