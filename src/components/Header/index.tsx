/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { ReactNode, useState, useRef } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { CustomButton } from '../CustomButton';
import styles from './style.module.css';
import logoFull from '../../assets/logo/full-logo.svg';
import logo from '../../assets/logo/logo.svg';
import useWindowDimensions from '../../hooks/viewport';
import useOutsideAlerter from '../../hooks/detectOutsideClick';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);
  const links: { [key: string]: string } = {
    'Find Mentor': '/',
    Resources: '/resources',
    FAQs: '/FAQs',
    About: '/about',
    'Contact Us': '/contactUs',
  };
  const renderLinks = (_links: { [key: string]: string }) => {
    return (
      <>
        {Object.keys(_links).forEach((key) => (
          <div className={styles.links}>jbjbij{key}</div>
        ))}
      </>
    );
  };

  const wrapperRef = useRef(null);

  const clickedOutside = useOutsideAlerter(wrapperRef);
  console.log(clickedOutside);

  React.useEffect(() => {
    if (clickedOutside) setShowMenu(false);
  }, [clickedOutside]);

  const headerContent = (
    <div className={styles.container} ref={wrapperRef}>
      <div className={styles.headerLinks}>
        {Object.keys(links).map((key) => (
          <div className={styles.link}>{key}</div>
        ))}
      </div>
      <div className={styles.buttons}>
        <CustomButton onClick={() => {}} size="middle" text="Book a Demo" />
        <CustomButton
          isSecondary
          onClick={() => {}}
          size="large"
          text="Sign Up"
        />
      </div>
    </div>
  );
  console.log(width);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <img className={styles.logo} src={logoFull} alt="" />

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
