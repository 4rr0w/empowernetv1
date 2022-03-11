/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  StarFilled,
  HeartFilled,
  WechatFilled,
  PhoneFilled,
  VideoCameraFilled,
  CheckSquareOutlined,
  ShoppingFilled,
  FileAddFilled,
} from '@ant-design/icons';
import { Modal } from 'antd';
import styles from './style.module.css';
import Maskgrp2 from '../../assets/landingPage/Section6/MaskGroup2.png';
import { CustomButton } from '../CustomButton';

export interface MentorCardProps {
  mentor?: {
    first_name: string;
    last_name: string;
    about: string;
    photo: string;
    education?: string;
    profession?: string;
    skills: string[];
    stars?: number;
  };
}

export const MentorCard: React.FC<MentorCardProps> = ({
  mentor = {
    first_name: 'Fredia Gibbs',
    education: 'Btech',
    profession: 'Product Manager',
    skills: ['Python', 'Cpp'],
    about:
      'With a decade of product management experience in companies across Europe and the US, I am hoping to share my knowledge and support to other product people by creating a tailored coaching program according to needs and goals.',
    stars: 4,
  },
}) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className={styles.mainSec}>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <p>Send your first message </p>
        <textarea name="Text1" cols={40} rows={3} />
      </Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.img}
            src={`${process.env.REACT_APP_BACKEND_URL}/${mentor.photo}`}
          />
          <div className={styles.desc}>
            <p className={styles.first_name}>
              {`${mentor.first_name} ${mentor.last_name}`}
              <div className={styles.stars}>
                {[Array(Math.floor(mentor.stars || 0))].map((n) => (
                  <StarFilled />
                ))}
              </div>
            </p>
            <p className={styles.text2}>{mentor.profession || ''}</p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.tags}>
            {mentor.skills.map((tag) => {
              return (
                <CustomButton
                  className={styles.tag}
                  onClick={() => {}}
                  size="small"
                  text={tag}
                />
              );
            })}
          </div>
          <p className={styles.about}>{mentor.about}</p>
        </div>
      </div>
      <CustomButton
        style={{
          width: 'fit-content',
        }}
        onClick={() => showModal()}
        size="small"
        text="connect"
      />
      {/* <div className={styles.contact}>
        <div>
          <HeartFilled className={styles.sideicon} />
          <p className={styles.texticon}> like</p>
        </div>
        <div>
          <WechatFilled className={styles.sideicon} />
          <p className={styles.texticon}> Chat</p>
        </div>
        <div>
          <PhoneFilled className={styles.sideicon} />
          <p className={styles.texticon}>Call</p>
        </div>
        <div>
          <VideoCameraFilled className={styles.sideicon} />
          <p className={styles.texticon}>Video Call</p>
        </div>
        <div>
          <CheckSquareOutlined className={styles.sideicon} />
          <p className={styles.texticon}>Tasks</p>
        </div>
        <div>
          <ShoppingFilled className={styles.sideicon} />
          <p className={styles.texticon}>Hands on</p>
        </div>
        <div>
          {' '}
          <FileAddFilled className={styles.sideicon} />
          <p className={styles.texticon}>Resources</p>{' '}
        </div>
      </div> */}
    </div>
  );
};
