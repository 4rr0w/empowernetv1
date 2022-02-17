/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  MentorMenteeOption,
  MentorMenteeOptionProps,
} from '../screens/SignUp/MentorMenteeOption';

export default {
  title: 'components/MentorMenteeOptions',
  component: MentorMenteeOption,
} as Meta;

const Template: Story<MentorMenteeOptionProps> = (args) => (
  <MentorMenteeOption {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
