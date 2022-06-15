import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Home setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
