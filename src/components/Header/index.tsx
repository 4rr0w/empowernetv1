/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { ReactNode, useState, useRef } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import styles from './style.module.css';
import logoFull from '../../assets/logo/full-logo.svg';
import logo from '../../assets/logo/logo.svg';
import useWindowDimensions from '../../hooks/viewport';
import useOutsideAlerter from '../../hooks/detectOutsideClick';

export interface HeaderProps {
  links?: {
    text: string;
    onClick: Function;
  }[];
  handelClick?: Function;
}

export const Header: React.FC<HeaderProps> = ({
  links = [],
  handelClick = () => null,
}) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef(null);

  const clickedOutside = useOutsideAlerter(wrapperRef);

  React.useEffect(() => {
    if (clickedOutside) setShowMenu(false);
  }, [clickedOutside]);

  const headerContent = (
    <div className={styles.container} ref={wrapperRef}>
      <div className={styles.headerLinks}>
        {links.map((item) => (
          <div className={styles.link} onClick={() => item.onClick()}>
            {item.text}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <CustomButton
          onClick={() => navigate('/signin')}
          size="middle"
          text="Sign In"
        />
        <CustomButton
          isSecondary
          onClick={() => navigate('/signup')}
          size="large"
          text="Sign Up"
        />
      </div>
    </div>
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src={logoFull}
          alt=""
          onClick={() => navigate('/')}
        />

        {width <= 900
          ? !showMenu && (
              <MenuOutlined
                className={styles.menuButton}
                onClick={() => setShowMenu(!showMenu)}
              />
            )
          : headerContent}
      </div>

      {showMenu && width <= 900 && headerContent}
    </div>
  );
};
