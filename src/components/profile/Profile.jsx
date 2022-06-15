import PersonDesc from '../general/PersonDesc';
import style from './Profile.module.css';

const Profile = ({ person }) => {
  return (
    <div className={style.profile}>
      <div className={style.imgBlock}>
        <img className={style.img} src={person.image} alt={`${person.first_name} ${person.last_name}'s profile`} />
      </div>
      <div className={style.textBlock}>
        <div className={style.description}>
          <PersonDesc person={person} />
        </div>
        <div className={style.textpost}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero, optio iusto vel aliquid accusamus, cumque
          quas modi similique consequatur quae, dolorem mollitia repellat quia delectus veritatis necessitatibus.
          Sapiente, asperiores. Dicta explicabo blanditiis ipsa facilis iure? Delectus, nulla modi iure quidem corporis
          hic! Blanditiis nobis quisquam asperiores ducimus incidunt minus perferendis, officia deleniti voluptas omnis
          sint, exfficia deleniti voluptas omnis sint, excepturi magnam exercitationem temporibus. sint, excepturi
          magnam exercitationem temporibus. Sapiente, asperiores. Dicta explicabo blanditiis ipsa facilis iure?
          Delectus, nulla modi iure quidem corporis hic! Blanditiis nobis quisquam asperiores .
        </div>
      </div>
    </div>
  );
};

export default Profile;
