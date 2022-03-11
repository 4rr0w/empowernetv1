/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { ChatInput, ChatInputProps } from '../components/ChatInput';

export default {
  title: 'components/ChatInput',
  component: ChatInput,
} as Meta;

const Template: Story<ChatInputProps> = (args) => <ChatInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
