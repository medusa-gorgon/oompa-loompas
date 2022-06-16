import { useEffect, useRef } from 'react';
import PersonDesc from '../general/PersonDesc';
import style from './Profile.module.css';

const Profile = ({ person }) => {
  const el = useRef(null);
  useEffect(() => {
    if (el && person) {
      el.current.innerHTML = person.description;
    }
  }, [person]);

  return (
    person && (
      <div className={style.profile}>
        <div className={style.imgBlock}>
          <img className={style.img} src={person.image} alt={`${person.first_name} ${person.last_name}'s profile`} />
        </div>
        <div className={style.textBlock}>
          <div className={style.description}>
            <PersonDesc person={person} />
          </div>
          <div ref={el} className={style.textpost}></div>
        </div>
      </div>
    )
  );
};

export default Profile;
