import AllPosts from './posts/AllPosts';
import Hero from './hero/Hero';
import Preloader from '../general/Preloader';
import style from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/homeSlice';

const Home = ({ setSearchValue, searchValue }) => {
  const dispatch = useDispatch();
  const { posts, status, fetchedDate } = useSelector((state) => state.homePage);

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();
    if (status === 'idle' && today - fetchedDate > oneday) {
      dispatch(fetchPosts());
    }
  }, [status, dispatch, posts, fetchedDate]);

  return (
    <div className={style.home}>
      <Hero setSearchValue={setSearchValue} />
      {status === 'loading' ? (
        <Preloader />
      ) : status === 'succeeded' ? (
        <AllPosts searchValue={searchValue} people={posts} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
