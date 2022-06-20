import React from 'react';
import './SearchBar.css';
import SearchIcon from './SearchIcon';

function SearchBar() {
  return (
    <>
    <div className="search-bar" tabIndex="0">
        <input className="search-bar__input" type="text" name="search" placeholder="Enter search keyword..."/>
        <span className="search-bar__suggestion"><i>hipnotized</i></span>
        <span className="search-bar__icon">
          <SearchIcon />
        </span>
    </div>
    <p className="tip">Hit the <span>Tab</span> key to accept suggestion</p>
    </>
  )
}

export default SearchBar;