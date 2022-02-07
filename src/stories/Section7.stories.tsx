/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section7, Section7Props } from '../components/landingPage/Section7';

export default {
  title: 'components/Section7',
  component: Section7,
} as Meta;

const Template: Story<Section7Props> = (args) => <Section7 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
