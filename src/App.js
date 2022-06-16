import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [people, setPeople] = useState(null);
  const [profile, setProfile] = useState(null);

  const fetchImages = async () => {
    const result = await fetch('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1');
    const data = await result.json();
    setPeople(data.results);
  };
  const fetchProfile = async (id) => {
    const result = await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`);
    const data = await result.json();
    setProfile(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Header setProfile={setProfile} />
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  fetchProfile={fetchProfile}
                  people={people}
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                />
              }
            />

            <Route path='/profile/:id' element={<Profile person={profile} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
