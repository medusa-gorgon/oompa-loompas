import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, setCurrentProfile } from '../../redux/profileSlice';
import { useLocation } from 'react-router-dom';
import Preloader from '../general/Preloader';
import Profile from './Profile';

const ProfileContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentProfile, status } = useSelector((state) => state.profile);
  const id = location.pathname.substring(9);

  useEffect(() => {
    dispatch(setCurrentProfile(id));
  }, []);

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();
    if (!currentProfile || today - oneday > currentProfile.fetchedDate) {
      dispatch(getUserProfile(id));
    }
  }, [currentProfile]);

  if (status === 'loading') {
    return <Preloader />;
  } else if (status === 'succeeded' && currentProfile) {
    return <Profile profile={currentProfile.data} />;
  } else if (status === 'failed') {
    return <div>error</div>;
  }
};

export default ProfileContainer;
