import AllPosts from './posts/AllPosts';
import Hero from './hero/Hero';
import Preloader from '../general/Preloader';
import style from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/homeSlice';
import useInfiniteScroll from '../general/useInfiniteScroll';

const Home = ({ setSearchValue, searchValue }) => {
  const dispatch = useDispatch();
  const { posts, nextPage, totalPages, status, fetchedDate } = useSelector((state) => state.homePage);

  const [isFetching, setIsFetching] = useInfiniteScroll(() => {
    if (nextPage <= totalPages) {
      dispatch(fetchPosts(nextPage));
    }
    setIsFetching(false);
  });

  useEffect(() => {
    const oneday = 60 * 60 * 24 * 1000;
    const today = Date.now();

    if (status === 'idle' && today - oneday > fetchedDate && nextPage <= totalPages) {
      dispatch(fetchPosts(nextPage));
    }
  }, []);

  return (
    <div className={style.home}>
      <Hero setSearchValue={setSearchValue} />
      {status === 'loading' ? (
        <div>
          <Preloader />
        </div>
      ) : status === 'succeeded' ? (
        <AllPosts searchValue={searchValue} people={posts} />
      ) : (
        ''
      )}
      {isFetching && <Preloader />}
    </div>
  );
};

export default Home;
