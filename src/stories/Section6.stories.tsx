/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section6, Section6Props } from '../components/landingPage/Section6';

export default {
  title: 'components/Section6',
  component: Section6,
} as Meta;

const Template: Story<Section6Props> = (args) => <Section6 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
