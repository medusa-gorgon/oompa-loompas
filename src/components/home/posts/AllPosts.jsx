import style from './AllPosts.module.css';
import Post from './post/Post';

const AllPosts = ({ searchValue, people }) => {
  return (
    <main className={style.posts}>
      {people &&
        people
          // .filter((person) => {
          //   if (searchValue === '') {
          //     return person;
          //   } else if (
          //     person.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          //     person.author.toLowerCase().includes(searchValue.toLowerCase()) ||
          //     person.price.toString().includes(searchValue.toLowerCase())
          //   ) {
          //     return post;
          //   }
          // })
          .map((person) => <Post key={person.id} person={person} />)}
    </main>
  );
};

export default AllPosts;
