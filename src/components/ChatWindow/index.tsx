/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'antd';
import { MdDelete } from 'react-icons/md';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';
import { ChatCard } from '../ChatCard';
import { ChatInput } from '../ChatInput';

export interface ChatWindowProps {
  name?: string;
  id?: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  name = 'Name Here',
  id,
}) => {
  const msgs: {
    status: 'sent' | 'read';
    type: 'text' | 'image';
    msg: string;
    time: string;
    name: string;
  }[] = [
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
    {
      type: 'text',
      name: 'Don Rodriguez',
      status: 'read',
      msg: 'Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. The savings today are significant.',
      time: '8 May 2021, 1:36 pm',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{name}</span>
        <MdDelete className={styles.icon} />
      </div>
      <div className={styles.chatSection}>
        {msgs.map((msg) => (
          <ChatCard
            data={{
              ...msg,
            }}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
