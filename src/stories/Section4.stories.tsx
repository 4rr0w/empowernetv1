/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section4, Section4Props } from '../components/landingPage/Section4';

export default {
  title: 'components/Section4',
  component: Section4,
} as Meta;

const Template: Story<Section4Props> = (args) => <Section4 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
