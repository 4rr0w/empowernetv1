/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { ChatPerson, ChatPersonProps } from '../components/ChatPerson';

export default {
  title: 'components/ChatPerson',
  component: ChatPerson,
} as Meta;

const Template: Story<ChatPersonProps> = (args) => <ChatPerson {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
