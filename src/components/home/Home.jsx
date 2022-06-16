import AllPosts from './posts/AllPosts';
import Hero from './hero/Hero';
import style from './Home.module.css';

const Home = ({ setSearchValue, searchValue, people, fetchProfile }) => {
  return (
    <div className={style.home}>
      <Hero setSearchValue={setSearchValue} />
      <AllPosts fetchProfile={fetchProfile} people={people} searchValue={searchValue} />
    </div>
  );
};

export default Home;
