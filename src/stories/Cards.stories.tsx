/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { Cards, CardsProps } from '../components/Cards';

export default {
  title: 'components/Cards',
  component: Cards,
} as Meta;

const Template: Story<CardsProps> = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
