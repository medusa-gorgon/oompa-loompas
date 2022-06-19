import ProfileDesc from '../../../general/ProfileDesc';
import style from './Post.module.css';
import { NavLink } from 'react-router-dom';
import { getUserProfile } from '../../../../redux/profileSlice';
import { useDispatch } from 'react-redux';

const Post = ({ person }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.post}>
      <NavLink
        to={`/profile/${person.id}`}
        onClick={() => {
          // dispatch(setProfileId(person.id));
          dispatch(getUserProfile(person.id));
        }}
        className={style.postLink}
      >
        <div className={style.imgBlock}>
          <img className={style.img} src={person.image} alt={`${person.first_name} ${person.last_name}'s profile`} />
        </div>
        <div className={style.description}>
          <ProfileDesc person={person} hover={true} />
        </div>
      </NavLink>
    </div>
  );
};

export default Post;
