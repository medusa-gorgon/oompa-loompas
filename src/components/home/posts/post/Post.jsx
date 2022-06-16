import PersonDesc from '../../../general/PersonDesc';
import style from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = ({ person, fetchProfile }) => {
  return (
    <div className={style.post}>
      <NavLink
        to={`/profile/${person.id}`}
        onClick={() => {
          fetchProfile(person.id);
        }}
        className={style.postLink}
      >
        <div className={style.imgBlock}>
          <img className={style.img} src={person.image} alt={`${person.first_name} ${person.last_name}'s profile`} />
        </div>
        <div className={style.description}>
          <PersonDesc person={person} hover={true} />
        </div>
      </NavLink>
    </div>
  );
};

export default Post;
