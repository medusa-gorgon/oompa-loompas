import style from './PersonDesc.module.css';

const PersonDesc = ({ person }) => {
  return (
    <div className={style.description}>
      <span className={style.name}>{`${person.first_name} ${person.last_name}`}</span>
      <span className={style.gender}>{person.gender === 'F' ? 'Woman' : 'Man'}</span>
      <span className={style.profession}> {person.profession}</span>
    </div>
  );
};

export default PersonDesc;
