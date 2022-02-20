import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CustomButton } from '../../CustomButton';
import { InputWithIcon } from '../../InputWithIcon';
import styles from './style.module.css';

export interface WelcomePageProps {
  onNextClick?: Function;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({
  onNextClick = () => null,
}) => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  const handelNext = () => {
    if (!error) onNextClick(email);
  };

  React.useEffect(() => {
    setError(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email));
  }, [email]);
  return (
    <div>
      <FormItem
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <InputWithIcon
          error={error}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          icon={<MdOutlineMailOutline style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Email Address"
        />
      </FormItem>
      <FormItem>
        <CustomButton
          disabled={error}
          onClick={handelNext}
          size="large"
          block
          text="Next"
          style={{
            marginTop: '2vw',
            padding: '2vw',
            fontSize: 'min(16px,2vw)',
          }}
        />
      </FormItem>
    </div>
  );
};
