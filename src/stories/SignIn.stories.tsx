/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { SignIn, SignInProps } from '../screens/SignIn';

export default {
  title: 'screens/SignIn',
  component: SignIn,
} as Meta;

const Template: Story<SignInProps> = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
