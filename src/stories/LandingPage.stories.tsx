/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { LandingPage, LandingPageProps } from '../screens/LandingPage';

export default {
  title: 'screens/LandingPage',
  component: LandingPage,
} as Meta;

const Template: Story<LandingPageProps> = (args) => <LandingPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
