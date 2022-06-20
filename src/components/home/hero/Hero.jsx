import search from '../../../assets/ic_search.png';
import style from './Hero.module.css';

const Hero = ({ setSearchValue }) => {
  return (
    <section className={style.hero}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=''
        className={style.form}
      >
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className={style.input}
          id='input'
          type='text'
          placeholder='Search'
        />
        <label htmlFor='input'>
          <div className={style.searchIcon}>
            <img src={search} alt='search icon' />
          </div>
        </label>
      </form>
      <div>
        <h1 className={style.title}>Find your Oompa Loompa</h1>
        <h2 className={style.subtitle}>There are more than 100k</h2>
      </div>
    </section>
  );
};

export default Hero;
