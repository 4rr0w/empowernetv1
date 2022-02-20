import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { MdPassword } from 'react-icons/md';
import { Typography } from 'antd';
import { CustomButton } from '../../CustomButton';
import { InputWithIcon } from '../../InputWithIcon';
import styles from './style.module.css';

const { Text } = Typography;
export interface ChoosePasswordProps {
  onNextClick?: Function;
}

export const ChoosePassword: React.FC<ChoosePasswordProps> = ({
  onNextClick = () => null,
}) => {
  const [pass, setPass] = React.useState('');
  const [pass2, setPass2] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  const handelSignup = () => {
    onNextClick(pass);
  };

  React.useEffect(() => {
    if (pass !== pass2) {
      setError(true);
      setErrorText('Passwords does not match.');
    } else if (pass.length < 6) {
      setError(true);
      setErrorText('Please choose a password with min length 6');
    } else {
      setError(false);
      setErrorText('');
    }
  }, [pass, pass2]);

  return (
    <>
      <FormItem
        name="password"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <InputWithIcon
          type="text"
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
          type="text"
          onChange={(e) => setPass2(e.target.value)}
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
};
