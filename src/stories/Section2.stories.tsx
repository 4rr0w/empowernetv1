/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Section2, Section2Props } from '../components/landingPage/Section2';

export default {
  title: 'components/Section2',
  component: Section2,
} as Meta;

const Template: Story<Section2Props> = (args) => <Section2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
