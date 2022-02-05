/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MdSearch } from 'react-icons/md';
import '../App.css';

import { CustomButton, ButtonProps } from '../components/CustomButton';

export default {
  title: 'components/CustomButton',
  component: CustomButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Book a Demo',
  size: 'middle',
  isSecondary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
  text: 'Sign Up',
  size: 'large',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  prefixIcon: <MdSearch fontSize={27} style={{ marginLeft: '5px' }} />,
  text: 'Find Mentor',
  size: 'middle',
  iconRight: true,
  style: {
    padding: '13px 16px',
    height: '56px',
    fontSize: '24px',
  },
};

export const RoundButton = Template.bind({});
RoundButton.args = {
  prefixIcon: <MdSearch fontSize={24} />,
  size: 'large',
  round: true,
  text: ' ',
  style: {
    height: '60px',
    width: '80px',
  },
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  style: {
    border: '2px solid #D8D8D8',
    background: 'transparent 0% 0% no-repeat padding-box',
  },
  text: 'Contact Sales',
  size: 'large',
};
