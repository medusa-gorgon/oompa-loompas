import style from './AllPosts.module.css';
import Post from './post/Post';

const AllPosts = ({ searchValue, people, fetchProfile }) => {
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
          .map((person) => <Post fetchProfile={fetchProfile} key={person.id} person={person} />)}
    </main>
  );
};

export default AllPosts;
