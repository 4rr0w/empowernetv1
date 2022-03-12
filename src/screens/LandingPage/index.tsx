/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Section1 } from '../../components/landingPage/Section1';
import { Section2 } from '../../components/landingPage/Section2';
import { Section3 } from '../../components/landingPage/Section3';
import { Section4 } from '../../components/landingPage/Section4';
import { Section5 } from '../../components/landingPage/Section5';
import { Section6 } from '../../components/landingPage/Section6';
import { Section7 } from '../../components/landingPage/Section7';
import { Section8 } from '../../components/landingPage/Section8';
import styles from './style.module.css';

export interface LandingPageProps {
  text?: string;
}

export const LandingPage: React.FC<LandingPageProps> = () => {
  const navigate = useNavigate();
  const scrollToDiv = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [secRef, setSecRef] = React.useState<{
    [key: string]: React.RefObject<null>;
  }>({});

  const handelHeaderClick = (linkKey: string) => {
    scrollToDiv(secRef[linkKey]);
  };

  const links: {
    text: string;
    onClick: Function;
  }[] = [
    {
      text: 'Find Mentor',
      onClick: () => {
        navigate('/search');
      },
    },
    // { text: 'Resources', onClick: () => handelHeaderClick('Resources') },
    // { text: 'Contact Us', onClick: () => handelHeaderClick('Contact Us') },
    {
      text: 'Internet Curation',
      onClick: () => {
        navigate('/internetcuration');
      },
    },
    {
      text: 'Community Forum',
      onClick: () => {
        navigate('/forum');
      },
    },
    {
      text: 'Showcase',
      onClick: () => {
        navigate('/showcase');
      },
    },
    { text: 'About Us', onClick: () => handelHeaderClick('About Us') },
  ];

  return (
    <div className={styles.landingContainer}>
      <Header links={links} handelClick={handelHeaderClick} />
      <Section1
        getRef={(r: any) =>
          setSecRef((prevState) => ({ ...prevState, 'Find Mentor': r }))
        }
      />
      <Section2 />
      <Section3
        getRef={(r: any) =>
          setSecRef((prevState) => ({ ...prevState, Resources: r }))
        }
      />
      <Section4
        getRef={(r: any) =>
          setSecRef((prevState) => ({ ...prevState, 'About Us': r }))
        }
      />
      {/* <Section5 />
      <Section6 /> */}
      <Section7 />
      <Section8
        getRef={(r: any) =>
          setSecRef((prevState) => ({ ...prevState, 'Contact Us': r }))
        }
      />
    </div>
  );
};
