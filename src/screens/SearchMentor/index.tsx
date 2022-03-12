/* eslint-disable no-unused-vars */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FilterFilled, SortAscendingOutlined } from '@ant-design/icons';
import { MdSearch } from 'react-icons/md';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './style.module.css';
import { CustomButton } from '../../components/CustomButton';
import { MentorCard } from '../../components/MentorCard';
import instance from '../../client/axiosClient';
import { Header } from '../../components/Header';

export interface SearchMentorProps {
  getRef?: Function;
}

export const SearchMentor: React.FC<SearchMentorProps> = ({
  getRef = () => null,
}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchSkills = searchParams.get('skills');

  const [skills, setSkills] = React.useState(searchSkills || '');
  const [loading, setLoading] = React.useState(false);
  const [mentors, setMentors] = React.useState<
    {
      about: string;
      first_name: string;
      last_name: string;
      photo: string;
      email: string;
      skills: string[];
    }[]
  >();

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
    navigate(`/search?skills=${skills}`);
  };

  React.useEffect(() => {
    setLoading(true);
    const formData = new FormData();
    formData.append('skills', skills);

    instance
      .get(`/find_mentors?skills=${skills}`)
      .then((response) => {
        console.log(response.data);
        setMentors(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [skills]);

  React.useEffect(() => {
    setSkills(searchSkills || '');
  }, [searchSkills]);

  return (
    <div className={styles.mainSec}>
      <Header links={[]} />
      <div className={styles.containerbody}>
        <div className={styles.containertop}>
          <div className={styles.container1}>
            <div className={styles.inputContainer}>
              <input
                onChange={(e) => setSkills(e.target.value)}
                className={styles.searchInput}
                placeholder="Try “Mathematics“ or “Computer Science”"
              />
              <CustomButton
                className={styles.findButton}
                disabled={skills.trim() === ''}
                iconRight
                onClick={() => handelSearch()}
                prefixIcon={
                  <MdSearch
                    style={{ marginLeft: '5px', fontSize: 'min(2vw, 25px)' }}
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
                  <Link to={`/search?skills=${tag}`}>
                    <CustomButton
                      className={styles.tag}
                      size="middle"
                      text={tag}
                      gradient={[tags[tag][0], tags[tag][0]]}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <div className={styles.selectcontainer}>
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
                size="sm"
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
                size="sm"
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
        </div> */}
        </div>
        <div className={styles.mentorlist}>
          {mentors && skills ? (
            mentors.map((mentor) => (
              <div className="my-2">
                <MentorCard mentor={mentor} />
              </div>
            ))
          ) : (
            <div className={styles.searchAsk}>
              <br />
              Search mentor...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
