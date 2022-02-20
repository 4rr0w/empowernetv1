/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  WrapperSignup,
  WrapperSignupProps,
} from '../components/signUpPage/WrapperSignup';
import { ChoosePassword } from '../components/signUpPage/ChoosePassword';

export default {
  title: 'components/WrapperSignup',
  component: WrapperSignup,
} as Meta;

const Template: Story<WrapperSignupProps> = (args) => (
  <WrapperSignup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  component: <ChoosePassword />,
};
