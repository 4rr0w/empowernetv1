/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { SearchMentor, SearchMentorProps } from '../screens/SearchMentor';

export default {
  title: 'components/SearchMentor',
  component: SearchMentor,
} as Meta;

const Template: Story<SearchMentorProps> = (args) => <SearchMentor {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
