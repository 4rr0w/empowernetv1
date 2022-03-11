/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { ChatPage, ChatPageProps } from '../screens/ChatPage';

export default {
  title: 'screens/ChatPage',
  component: ChatPage,
} as Meta;

const Template: Story<ChatPageProps> = (args) => <ChatPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
