/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section3, Section3Props } from '../components/landingPage/Section3';

export default {
  title: 'components/Section3',
  component: Section3,
} as Meta;

const Template: Story<Section3Props> = (args) => <Section3 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
