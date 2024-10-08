import './App.css';
import Header from './Components/Header/header';
import Movies from './Components/Movies/Movies';
import Loader from './Components/Loader/Loader';
import { useState, useEffect } from 'react';
import { AppContext } from './Context/SearchContext';

function App() {
  const [movies, setMovies] = useState(['avengers']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("reloaded")
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: movies,
        setState: setMovies,
        isLoading: isLoading,
        setIsLoading: setIsLoading
      }}
    >
      <div className="App">
        <Header />
        {isLoading && <Loader />}
        <Movies />
      </div>
    </AppContext.Provider>
  );
}

export default App;
