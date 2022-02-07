/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section8, Section8Props } from '../components/landingPage/Section8';

export default {
  title: 'components/Section8',
  component: Section8,
} as Meta;

const Template: Story<Section8Props> = (args) => <Section8 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
