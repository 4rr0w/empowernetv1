/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Input } from 'antd';
import { MdChat, MdSend } from 'react-icons/md';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';

export interface ChatInputProps {
  placeholder?: string;
  onEnter?: Function;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = 'Type your message...',
  onEnter = () => {},
}) => {
  const [msg, setMsg] = React.useState('');

  const onSend = () => {
    if (msg !== '') onEnter(msg);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSend();
    }
  };
  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <MdSend className={styles.icon} onClick={onSend} />
    </div>
  );
};
