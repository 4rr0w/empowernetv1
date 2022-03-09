import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FilterFilled, SortAscendingOutlined } from '@ant-design/icons';
import { MdSearch } from 'react-icons/md';
import styles from './style.module.css';
import { CustomButton } from '../CustomButton';
import { MentorCard } from '../MentorCard';

export interface SearchMentorProps {
  getRef?: Function;
}

export const SearchMentor: React.FC<SearchMentorProps> = ({
  getRef = () => null,
}) => {
  const [skills, setSkills] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const ref = React.useRef(null);
  React.useEffect(() => {
    getRef(ref);
  }, [ref]);

  const tags: { [key: string]: string[] } = {
    Mathematics: ['#7E60FF', '/path'],
    CS: ['#8BC5FF', '/path'],
    Engineering: ['#F7DB42', '/path'],
    'Machine Learning': ['#EC9CAE', '/path'],
  };

  const handelSearch = async () => {
    setLoading(true);
    formData.append('skills', skills);

    await instance
      .post('/find_mentors/', skills)
      .then((response) => {
        console.log(response);
        setLoading(false);
       
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        
      });
  };
  return (
    <div className={styles.mainSec}>
      <div className={styles.containerbody}>
        <div className={styles.containertop}>
          <div className={styles.container1}>
            <div className={styles.inputContainer}>
              <input
                onChange={e => setSkills(e.target.value)}
                className={styles.searchInput}
                placeholder="Try “Mathematics“ or “Computer Science”"
              />
              <CustomButton
                className={styles.findButton}
                iconRight
                onClick={() => {}}
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
          <div className={styles.selectcontainer}>
            <div className={styles.container2}>
              <div className={styles.container3}>
                <div>
                  <div className={styles.btn1}>
                    Filter
                    <FilterFilled className="mx-2 mb-1" />
                  </div>
                </div>

                <div className={styles.btn2}>
                  <div className={styles.text}>Gender</div>
                  <div className={styles.text}>Language</div>
                  <div className={styles.text}>Location</div>
                  <div className={styles.text}>Communication</div>
                  <div className={styles.text}>Domain</div>
                  <div className={styles.text}>Skills</div>
                  <div className={styles.text}>Pricing</div>
                </div>
              </div>
              <div className={styles.container3}>
                <div className={styles.btn1}>
                  Sort
                  <SortAscendingOutlined className="mx-2 mb-1" />
                </div>
                <div className={styles.btn2}>
                  <div className={styles.text}>Gender</div>
                  <div className={styles.text}>Language</div>
                  <div className={styles.text}>Location</div>
                  <div className={styles.text}>Communication</div>
                  <div className={styles.text}>Domain</div>
                  <div className={styles.text}>Skills</div>
                  <div className={styles.text}>Pricing</div>
                </div>
              </div>
            </div>
            <div />
          </div>
          <div className={styles.dropdowns}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="dark"
                size="lg"
              >
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Gender</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Language</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Communication</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Domain</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Skills</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Pricing</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="dark"
                size="lg"
              >
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Recommendation</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Availibility</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Experience</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Rating</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Price</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Time</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className={styles.mentorlist}>
          <div className="my-2">
            <MentorCard />
          </div>
          <div className="my-2">
            <MentorCard />
          </div>
          <div className="my-2">
            <MentorCard />
          </div>
          <div className="my-2">
            <MentorCard />
          </div>
          <div className="my-2">
            <MentorCard />
          </div>
        </div>
      </div>
    </div>
  );
};
