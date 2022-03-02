/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { Form, Typography } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import axios from 'axios';
import React, { ReactNode, RefObject } from 'react';
import { AccordionContext } from 'react-bootstrap';
import { MdEmail, MdPassword } from 'react-icons/md';
import instance from '../../client/axiosClient';
import { CustomButton } from '../../components/CustomButton';
import { InputWithIcon } from '../../components/InputWithIcon';
import { Progress } from '../../components/Progress';
import { AboutMePage } from '../../components/signUpPage/AboutMePage';
import { ChoosePassword } from '../../components/signUpPage/ChoosePassword';
import { MentorMenteeOption } from '../../components/signUpPage/MentorMenteeOption';
import { SignedIn } from '../../components/signUpPage/SignedIn';
import { WelcomePage } from '../../components/signUpPage/WelcomePage';
import { WrapperSignup } from '../../components/signUpPage/WrapperSignup';
import styles from './style.module.css';

const { Text } = Typography;

export interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [onSuccessHeading, setOnSuccessHeading] = React.useState('');
  const [success, setSuccess] = React.useState(true);

  const handelSignup = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', pass);
    await instance
      .post('/user/signin/', formData)
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

  React.useEffect(() => {
    if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
      setError(true);
      setErrorText('Invalid Email');
    } else {
      setError(false);
      setErrorText('');
    }
  }, [email]);

  const signInForm = (
    <>
      <FormItem
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <InputWithIcon
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          icon={<MdEmail style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Email"
        />
      </FormItem>
      <FormItem
        name="password"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <InputWithIcon
          type="password"
          onChange={(e) => setPass(e.target.value)}
          className={styles.input}
          icon={<MdPassword style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Re-type Password"
        />
      </FormItem>

      <FormItem>
        {error && (
          <Text
            type="danger"
            style={{
              fontSize: 'min(16px, 2vw)',
            }}
          >
            {errorText}
          </Text>
        )}
        <CustomButton
          loading={loading}
          disabled={error}
          onClick={handelSignup}
          size="large"
          block
          text="Sign Up"
          style={{
            marginTop: '2vw',
            padding: '2vw',
            fontSize: 'min(16px,2vw)',
          }}
        />
      </FormItem>
    </>
  );

  return <WrapperSignup heading="Sign In" component={signInForm} />;
};
