import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { MdPassword } from 'react-icons/md';
import { CustomButton } from '../../CustomButton';
import { InputWithIcon } from '../../InputWithIcon';
import styles from './style.module.css';

export interface ChoosePasswordProps {
  onNextClick?: Function;
}

export const ChoosePassword: React.FC<ChoosePasswordProps> = ({
  onNextClick = () => null,
}) => {
  const [pass, setPass] = React.useState('');
  const [pass2, setPass2] = React.useState('');

  const handelSignup = () => {
    if (pass === pass2) onNextClick(pass);
  };

  return (
    <>
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
          placeholder="Password"
        />
      </FormItem>
      <FormItem
        name="password2"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <InputWithIcon
          type="email"
          onChange={(e) => setPass2(e.target.value)}
          className={styles.input}
          icon={<MdPassword style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Re-type Password"
        />
      </FormItem>
      <FormItem>
        <CustomButton
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
};
