import { useState } from 'react';
import NavBar from './components/NavBar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  return (
    <div>
      <NavBar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  );
};

export default App;
