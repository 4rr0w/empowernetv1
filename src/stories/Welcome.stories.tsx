/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { WelcomePage, WelcomePageProps } from '../screens/SignUp/WelcomePage';

export default {
  title: 'components/WelcomePage',
  component: WelcomePage,
} as Meta;

const Template: Story<WelcomePageProps> = (args) => <WelcomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
