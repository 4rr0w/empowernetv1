import React from 'react';
import { MdArrowRight, MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Group51957 from '../../../assets/landingPage/Section1/Group 51957.png';
import Group51855 from '../../../assets/landingPage/Section1/Group 51855.png';
import Group51941 from '../../../assets/landingPage/Section1/Group 51941.png';
import { CustomButton } from '../../CustomButton';

export interface Section1Props {
  getRef?: Function;
}

export const Section1: React.FC<Section1Props> = ({ getRef = () => null }) => {
  const ref = React.useRef(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  const tags: { [key: string]: string[] } = {
    Mathematics: ['#7E60FF', '/path'],
    CS: ['#8BC5FF', '/path'],
    Engineering: ['#F7DB42', '/path'],
    'Machine Learning': ['#EC9CAE', '/path'],
  };

  const [skills, setSkills] = React.useState('');

  return (
    <div className={styles.mainSec1} ref={ref}>
      <div className={styles.topContainer}>
        <img className={styles.graphics} alt="" src={Group51957} />
        <img className={styles.girl} alt="" src={Group51855} />
        <p className={styles.empowernet}>EMPOWERNET</p>
        <p className={styles.subheading}>
          Mentorship
          <br />
          without
          <br />
          borders
        </p>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Try “Mathematics“ or “Computer Science”"
          />
          <CustomButton
            className={styles.findButton}
            iconRight
            disabled={skills.trim() === ''}
            onClick={() => navigate(`search?skills=${skills}`)}
            prefixIcon={
              <MdSearch
                style={{ marginLeft: '5px', fontSize: 'min(3vw, 34px)' }}
              />
            }
            size="middle"
            style={{
              padding: '13px 16px',
            }}
            text="Find Mentor"
          />
        </div>
        <div className={styles.tags}>
          {Object.keys(tags).map((tag) => {
            return (
              <CustomButton
                className={styles.tag}
                onClick={() => {}}
                size="middle"
                text={tag}
                gradient={[tags[tag][0], tags[tag][0]]}
              />
            );
          })}
        </div>
      </div>
      <img className={styles.rocket} alt="" src={Group51941} />
      <div className={styles.mentorship}>
        <p className={styles.mentorshipHeading}>
          Mentorship made{' '}
          <span
            style={{
              color: '#EC9CAE',
            }}
          >
            simple
          </span>
          .
        </p>
        <p className={styles.mentorshipIntro}>
          Empowering young women with the
          <span
            style={{
              color: '#8F74FF',
            }}
          >
            {' '}
            guidance
          </span>
          ,
          <span
            style={{
              color: '#F7DB42',
            }}
          >
            {' '}
            support{' '}
          </span>
          and
          <span
            style={{
              color: '#EC9CAE',
            }}
          >
            {' '}
            motivation{' '}
          </span>
          necessary to progress through their education and career and move
          towards realising their{' '}
          <span
            style={{
              color: '#7E60FF',
            }}
          >
            {' '}
            full potential{' '}
          </span>
          .
        </p>
        <p className={styles.mentorshipIntro2}>
          We believe that young women should not be excluded from real
          life-changing opportunities simply because their{' '}
          <span
            style={{
              color: '#EC9CAE',
            }}
          >
            quantitative fluency
          </span>
          is invisible.
        </p>
        <div className={styles.buttons}>
          <CustomButton text="Get Started" icon={<MdArrowRight />} iconRight />
          <CustomButton
            style={{
              background: 'transparent 0% 0% no-repeat padding-box',
              border: '2px solid #D8D8D8',
            }}
            text="Contact Sales"
          />
        </div>
      </div>
    </div>
  );
};
