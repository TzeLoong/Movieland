import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';


// 1615d2be

const API_URL = 'http://www.omdbapi.com?apikey=1615d2be';

const movie1 = 
  {
    "Title": "Avatar: The Last Airbender",
    "Year": "2005–2008",
    "imdbID": "tt0417299",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg"
}



const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(() => {
    searchMovies('shin chan')

  } ,[])


  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>

      { 
       movies?.length > 0 ? (
         <div className='container'>
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
       ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
       )
        
      }
    </div>
  );
}

export default App;