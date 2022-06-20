import './App.css';
import SearchBar from './components/SearchBar';
import Suggestion from './components/Suggestion';

function App() {
  return (
    <div className="App">
      <h1 className="App__header">Typo Friendly Search Demo </h1>
      <SearchBar />
      <Suggestion />
    </div>
  );
}

export default App;
