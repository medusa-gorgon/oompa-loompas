import style from './AllPosts.module.css';
import Post from './post/Post';

const AllPosts = ({ searchValue, people }) => {
  const filterFunc = (find, ...rules) => {
    if (
      rules.some((arg) => {
        return arg.toLowerCase().includes(searchValue.toLowerCase());
      })
    ) {
      return find;
    }
  };
  return (
    <main className={style.posts}>
      {people &&
        people
          .filter((person) => {
            if (!searchValue) {
              return person;
            } else if (filterFunc(person, person.first_name, person.last_name, person.profession)) {
              return person;
            }
            return '';
          })
          .map((person) => <Post key={person.id} person={person} />)}
    </main>
  );
};

export default AllPosts;
