/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section1, Section1Props } from '../components/landingPage/Section1';

export default {
  title: 'components/Section1',
  component: Section1,
} as Meta;

const Template: Story<Section1Props> = (args) => <Section1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
