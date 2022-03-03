/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'antd';
import { MdChat } from 'react-icons/md';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';

export interface ChatInputProps {
  placeholder?: string;
  onEnter?: Function;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = 'Type your Message',
  onEnter = () => {},
}) => {
  const [msg, setMsg] = React.useState();
  return <div className={styles.container} />;
};
