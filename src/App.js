import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Suggestion from './components/Suggestion';

function App() {
  const [nextWordSug, setNextWordSug] = useState('');
  const [correctionSugs, setCorrectionSugs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [canSearch, setCanSearch] = useState(false);

  const getNextWord = async () => {
    try {
      const res = await fetch(`https://api.datamuse.com/words?lc=${searchValue}`);
      const data = await res.json();
      if (data.length > 1) setNextWordSug(data[0].word);
    } catch (err) {
      alert('Error occured while getting susggestions!');
    }
  }
  
  const getCoreectionSugs = async () => {
    try {
      const res = await fetch(`https://api.datamuse.com/words?sp=${searchValue}`);
      const data = await res.json();
      let _data = [];
      for (let i = 0; i < 3; i++) {
        if (data.length >= 3) {
          if (data[0].word === searchValue.toLowerCase()) data.shift();
          _data.push(data[i].word);
          console.log(_data);
        }
        setCorrectionSugs(_data);
      }
    } catch (err) {
      alert('Error occured while getting susggestions!');
      console.log(err);
    }
  }
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value.length >= 3 && e.target.value.endsWith(' ')) setCanSearch(true);
    else setCanSearch(false);
  }

  useEffect(() => {
    if(canSearch) {
      getNextWord();
      getCoreectionSugs();
    }
  }, [canSearch]);

  return (
    <div className="App">
      <h1 className="App__header">Typo Friendly Search Demo </h1>
      <SearchBar handleSearch={handleSearch} nextWord={nextWordSug} searchValue={searchValue}/>
      <Suggestion correctionSugs={correctionSugs} searchValue={searchValue}/>
    </div>
  );
}

export default App;
