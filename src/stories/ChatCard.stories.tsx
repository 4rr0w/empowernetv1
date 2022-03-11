/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { ChatCard, ChatCardProps } from '../components/ChatCard';

export default {
  title: 'components/ChatCard',
  component: ChatCard,
} as Meta;

const Template: Story<ChatCardProps> = (args) => <ChatCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
