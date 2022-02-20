/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { MentorCard, MentorCardProps } from '../components/MentorCard';

export default {
  title: 'components/MentorCard',
  component: MentorCard,
} as Meta;

const Template: Story<MentorCardProps> = (args) => <MentorCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
