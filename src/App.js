import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [people, setPeople] = useState(null);

  const fetchImages = async () => {
    const result = await fetch('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1');
    const data = await result.json();
    console.log(data);
    setPeople(data.results);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        {people && <Profile person={people[0]} />}
        {people && <Home people={people} setSearchValue={setSearchValue} searchValue={searchValue} />}
      </div>
    </div>
  );
}

export default App;
