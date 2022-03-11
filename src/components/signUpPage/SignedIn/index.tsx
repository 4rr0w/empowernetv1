/* eslint-disable no-unused-vars */
import React from 'react';
import { CustomButton } from '../../CustomButton';
import styles from './style.module.css';

export interface SignedInProps {
  success?: boolean;
}

export const SignedIn: React.FC<SignedInProps> = ({ success = true }) => {
  return (
    <div>
      {success ? (
        <>
          <p>
            {' '}
            Sign Up was successful! Go ahead and Sign In to access your account.{' '}
          </p>
          <CustomButton onClick={() => {}} size="middle" text="Sign In" />
        </>
      ) : (
        <>
          Sign Up was Not Successfull. Please try again or write to us if the
          problem persists
        </>
      )}
    </div>
  );
};
