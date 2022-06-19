import style from './AllPosts.module.css';
import Post from './post/Post';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from '../../../redux/homeSlice';

const AllPosts = ({ searchValue, people }) => {
  // const dispatch = useDispatch();
  // const people = useSelector((state) => state.homePage.posts);
  // const postStatus = useSelector((state) => state.homePage.status);
  // useEffect(() => {
  //   console.log(postStatus);
  //   if (postStatus === 'idle') {
  //     dispatch(fetchPosts());
  //   }
  // }, [postStatus, dispatch]);

  // let content;

  // if (postStatus === 'loading') {
  //   <div>Loading...</div>;
  // } else if (postStatus === 'succeeded') {
  // content = people

  return (
    <main className={style.posts}>
      {people &&
        people
          .filter((person) => {
            if (!searchValue) {
              return person;
            } else if (
              person.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              person.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              person.profession.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return person;
            } else {
              return '';
            }
          })
          .map((person) => <Post key={person.id} person={person} />)}
    </main>
  );
};

export default AllPosts;
