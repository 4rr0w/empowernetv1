/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { MdEmail } from 'react-icons/md';
import { InputWithIcon, InputWithIconProps } from '../components/InputWithIcon';

export default {
  title: 'components/InputWithIcon',
  component: InputWithIcon,
} as Meta;

const Template: Story<InputWithIconProps> = (args) => (
  <InputWithIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: (
    <MdEmail
      style={{
        fontSize: 'min(25px, 3.6vw)',
      }}
    />
  ),
  iconColor: 'rgba(255, 215, 20, 1)',

  placeholder: 'Placeholder',
};
