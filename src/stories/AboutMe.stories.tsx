/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { AboutMePage, AboutMePageProps } from '../screens/SignUp/AboutMePage';

export default {
  title: 'components/AboutMePage',
  component: AboutMePage,
} as Meta;

const Template: Story<AboutMePageProps> = (args) => <AboutMePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
