/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { Form } from 'antd';
import React, { ReactNode, RefObject } from 'react';
import { AccordionContext } from 'react-bootstrap';
import instance from '../../client/axiosClient';
import { Progress } from '../../components/Progress';
import { AboutMePage } from '../../components/signUpPage/AboutMePage';
import { ChoosePassword } from '../../components/signUpPage/ChoosePassword';
import { MentorMenteeOption } from '../../components/signUpPage/MentorMenteeOption';
import { SignedIn } from '../../components/signUpPage/SignedIn';
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
  const [data, setData] = React.useState<{ [key: string]: string }>({
    email: '',
    first_name: '',
    last_name: '',
    country: '',
    education: '',
    languages: '',
    password: '',
    password2: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [onSuccessHeading, setOnSuccessHeading] = React.useState('');
  const [success, setSuccess] = React.useState(true);

  const handelClick = (option: string) => {
    setOptionChosen(option);
    setStep(1);
    scrollToDiv(welcomeRef);
  };

  const handelNextClick = (email: string) => {
    setData((prevState) => ({
      ...prevState,
      email,
    }));
    setStep(2);
    scrollToDiv(aboutRef);
  };

  const handelNextClick2 = (dataObtained: any) => {
    setStep(3);
    setData((prevState) => ({
      ...prevState,
      ...dataObtained,
    }));
  };

  const handelSignUp = async (password: string) => {
    setLoading(true);
    setData((prevState) => ({
      ...prevState,
      password,
      password2: password,
    }));

    const formData = new FormData();

    Object.keys(data).map((key) => formData.append(key, data[key]));
    await instance
      .post(`/${optionChosen}/register/`, formData)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setSuccess(true);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setSuccess(false);
      });
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
      component: (
        <ChoosePassword loading={loading} onNextClick={handelSignUp} />
      ),
    },
    4: {
      heading: onSuccessHeading,
      component: <SignedIn success={success} />,
    },
  };

  return <WrapperSignup {...steps[step]} />;
};
