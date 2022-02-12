/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { MdOutlineMailOutline } from 'react-icons/md';
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
    <MdOutlineMailOutline
      style={{
        fontSize: 'min(25px, 3.6vw)',
      }}
    />
  ),
  onFocusColor: 'rgba(255, 215, 20, 1)',

  placeholder: 'Placeholder',
};
