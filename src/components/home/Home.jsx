import AllPosts from './posts/AllPosts';
import Hero from './hero/Hero';
import style from './Home.module.css';

const Home = ({ setSearchValue, searchValue, people }) => {
  return (
    <div className={style.home}>
      <Hero setSearchValue={setSearchValue} />
      <AllPosts people={people} searchValue={searchValue} />
    </div>
  );
};

export default Home;
