/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  ChoosePassword,
  ChoosePasswordProps,
} from '../screens/SignUp/ChoosePassword';

export default {
  title: 'components/ChoosePassword',
  component: ChoosePassword,
} as Meta;

const Template: Story<ChoosePasswordProps> = (args) => (
  <ChoosePassword {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
