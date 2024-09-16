import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/SearchContext';
import './header.css'; // Import the custom CSS file

export default function Header() {
  const [inputValue, setInputValue] = useState('');
  const { state, setState } = useContext(AppContext);

  function updateMovies(search) {
    setInputValue(search);
    setState([search]);
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="menu-button">
          <button className="icon-button" aria-label="open drawer">
            <span className="menu-icon">☰</span> {/* Custom menu icon */}
          </button>
        </div>
        <h1 className="title">React Movies App</h1>
        <div className="search">
          <div className="search-icon-wrapper">
            <span className="search-icon">🔍</span> {/* Custom search icon */}
          </div>
          <input
            type="text"
            className="search-input"
            onChange={e => updateMovies(e.target.value)}
            value={inputValue}
            placeholder="Search…"
            aria-label="search"
          />
        </div>
      </div>
    </header>
  );
}
