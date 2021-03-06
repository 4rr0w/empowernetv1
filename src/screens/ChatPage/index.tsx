/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'antd';
import styles from './style.module.css';
import Group51950 from '../../assets/landingPage/Section6/Group 51950.png';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';
import { ChatPerson } from '../../components/ChatPerson';
import { ChatWindow } from '../../components/ChatWindow';

export interface ChatPageProps {
  align?: 'left' | 'right';
  data?: {
    time: string;
    type: 'text' | 'image';
    image: string;
    msg: string;
    name: string;
  };
}

export const ChatPage: React.FC<ChatPageProps> = ({
  align = 'left',
  data = {
    time: '9 May, 10:30 AM',
    type: 'text',
    image: '../../../assets/landingPage/Section6/MaskGroup2.png',
    msg: 'Use Notebooks, Worksflows, and Deployments together or Independently. Use Notebooks, Worksflows, and Deployments together or Independently. Use Notebooks, Worksflows, and Deployments together or Independently.',
    name: 'Alisher Abdulkhaev',
  },
}) => {
  const [activeId, setActiveId] = React.useState('id1');
  const chatList: { [key: string]: string } = {
    'Ola Fleming': 'id1',
    'Don Rodriguez': 'id2',
    'Lou Norton': 'id3',
    'Esther Moss': 'id4',
  };
  const setActiveChat = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {Object.keys(chatList).map((person) => (
          <ChatPerson
            id={chatList[person]}
            activeId={activeId}
            name={person}
            onPress={() => setActiveChat(chatList[person])}
          />
        ))}
      </div>
      <div className={styles.chatWindow}>
        <ChatWindow />
      </div>
    </div>
  );
};
