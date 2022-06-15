import AllPosts from './posts/AllPosts';
import Hero from './hero/Hero';
import style from './Home.module.css';

const Home = ({ setSearchValue, searchValue }) => {
  return (
    <div className={style.home}>
      <Hero setSearchValue={setSearchValue} />
      <AllPosts searchValue={searchValue} />
    </div>
  );
};

export default Home;
