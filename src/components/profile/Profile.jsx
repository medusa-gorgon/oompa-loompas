import { useEffect, useRef } from 'react';
import ProfileDesc from '../general/ProfileDesc';
import style from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../redux/profileSlice';
import { useLocation } from 'react-router-dom';
import Preloader from '../general/Preloader';

const Profile = () => {
  const location = useLocation();
  const id = location.pathname.substring(9);
  const el = useRef(null);
  const dispatch = useDispatch();
  const { profile, status } = useSelector((state) => state.profile);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUserProfile(id));
    }

    if (el && profile) {
      el.current.innerHTML = profile.description;
    }
  }, [id, profile, dispatch, status]);

  let content;

  if (status === 'loading') {
    content = <Preloader />;
  } else if (status === 'succeeded') {
    content = (
      <div className={style.profile}>
        <div className={style.imgBlock}>
          <img className={style.img} src={profile.image} alt={`${profile.first_name} ${profile.last_name}'s profile`} />
        </div>
        <div className={style.textBlock}>
          <div className={style.description}>
            <ProfileDesc person={profile} />
          </div>
          <div ref={el} className={style.textpost}></div>
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <div>error</div>;
  }
  return content;
};

export default Profile;
