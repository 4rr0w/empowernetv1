/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { MdSearch } from 'react-icons/md';
import { CustomInput, InputProps } from '../components/CustomInput';

export default {
  title: 'components/CustomInput',
  component: CustomInput,
} as Meta;

const Template: Story<InputProps> = (args) => <CustomInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
  icon: <MdSearch />,
};
