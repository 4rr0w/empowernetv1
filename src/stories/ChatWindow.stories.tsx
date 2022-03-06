/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { ChatWindow, ChatWindowProps } from '../components/ChatWindow';

export default {
  title: 'components/ChatWindow',
  component: ChatWindow,
} as Meta;

const Template: Story<ChatWindowProps> = (args) => <ChatWindow {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
