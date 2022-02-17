/* eslint-disable no-unused-vars */
import React from 'react';
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
  const scrollToDiv = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [secRef, setSecRef] = React.useState<{
    [key: string]: React.RefObject<null>;
  }>({});

  const links: string[] = ['Find Mentor', 'Resources', 'About', 'Contact Us'];

  const handelHeaderClick = (linkKey: string) => {
    scrollToDiv(secRef[linkKey]);
  };
  console.log(secRef);
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
          setSecRef((prevState) => ({ ...prevState, About: r }))
        }
      />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8
        getRef={(r: any) =>
          setSecRef((prevState) => ({ ...prevState, 'Contact Us': r }))
        }
      />
    </div>
  );
};
