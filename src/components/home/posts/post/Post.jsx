import PersonDesc from '../../../general/PersonDesc';
import style from './Post.module.css';

const Post = ({ person }) => {
  return (
    <div className={style.post}>
      <a className={style.postLink}>
        <div className={style.imgBlock}>
          <img className={style.img} src={person.image} alt={`${person.first_name} ${person.last_name}'s profile`} />
        </div>
        <div className={style.description}>
          <PersonDesc person={person} />
        </div>
      </a>
    </div>
  );
};

export default Post;
