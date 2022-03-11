import React from 'react';
import { MdAdd, MdLanguage, MdPlace, MdSchool, MdWork } from 'react-icons/md';
import { CustomButton } from '../../CustomButton';
import { InputWithIcon } from '../../InputWithIcon';
import styles from './style.module.css';

export interface AboutMePageProps {
  mentor?: boolean;
  onNextClick?: Function;
}

export const AboutMePage: React.FC<AboutMePageProps> = ({
  mentor = false,
  onNextClick = () => null,
}) => {
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState({
    first_name: '',
    last_name: '',
    country: '',
    education: '',
    languages: '',
    degree: '',
  });
  const handelNext = () => {
    if (!error) onNextClick(data);
  };

  React.useEffect(() => {
    setError(Object.values(data).some((x) => x === null || x === ''));
  }, [data]);
  return (
    <div>
      <div className={styles.row}>
        <InputWithIcon
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              first_name: e.target.value,
            }))
          }
          className={styles.input}
          icon={<MdAdd style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="First Name"
        />
        <InputWithIcon
          onChange={(e) =>
            setData((prevState) => ({
              ...prevState,
              last_name: e.target.value,
            }))
          }
          className={styles.input}
          icon={<MdAdd style={{ fontSize: 'min(25px, 4vw)' }} />}
          onFocusColor="rgba(255, 215, 20, 1)"
          placeholder="Last Name"
        />
      </div>
      <InputWithIcon
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            country: e.target.value,
          }))
        }
        className={styles.input}
        icon={<MdPlace style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Country"
      />
      <InputWithIcon
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            education: e.target.value,
          }))
        }
        className={styles.input}
        icon={<MdSchool style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Highest Education"
      />
      {mentor && (
        <>
          <InputWithIcon
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                degree: e.target.value,
              }))
            }
            className={styles.input}
            icon={<MdWork style={{ fontSize: 'min(25px, 4vw)' }} />}
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="Profession"
          />
          <InputWithIcon
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                profession: e.target.value,
              }))
            }
            className={styles.input}
            icon={<MdWork style={{ fontSize: 'min(25px, 4vw)' }} />}
            onFocusColor="rgba(255, 215, 20, 1)"
            placeholder="Profession"
          />
        </>
      )}

      <InputWithIcon
        onChange={(e) =>
          setData((prevState) => ({
            ...prevState,
            languages: e.target.value,
          }))
        }
        className={styles.input}
        icon={<MdLanguage style={{ fontSize: 'min(25px, 4vw)' }} />}
        onFocusColor="rgba(255, 215, 20, 1)"
        placeholder="Languages"
      />
      <CustomButton
        disabled={error}
        block
        onClick={handelNext}
        size="large"
        text="Next"
        style={{
          marginTop: '2vw',
          padding: '2vw',
          fontSize: 'min(16px,2vw)',
        }}
      />
    </div>
  );
};
