/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { SignUp, SignUpProps } from '../screens/SignUp/SignUp';

export default {
  title: 'screens/SignUP',
  component: SignUp,
} as Meta;

const Template: Story<SignUpProps> = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
