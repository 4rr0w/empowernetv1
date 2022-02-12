/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section5, Section5Props } from '../components/landingPage/Section5';

export default {
  title: 'components/Section5',
  component: Section5,
} as Meta;

const Template: Story<Section5Props> = (args) => <Section5 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
