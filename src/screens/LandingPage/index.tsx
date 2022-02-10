import React from 'react';
import { Header } from '../../components/Header';
import { Section1 } from '../../components/landingPage/Section1';
import { Section2 } from '../../components/landingPage/Section2';
import { Section3 } from '../../components/landingPage/Section3';
import { Section4 } from '../../components/landingPage/Section4';
import styles from './style.module.css';

export interface LandingPageProps {
  text?: string;
}

export const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className={styles.landingContainer}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};
