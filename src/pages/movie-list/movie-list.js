import React,{ useEffect, useState, createContext } from 'react'
import { Navbar, CardList } from '../../components'
import axios from 'axios'

const client = axios.create({
  baseURL: "https://www.omdbapi.com" 
});

export const MovieListContext = createContext();

const MovieList = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    client.get(`/?s=Pokemon&page=1&apikey=f0ece13b`).then((response) => {
      setMovies(response.data.Search);
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <MovieListContext.Provider value={movies}>
        <CardList/>
      </MovieListContext.Provider>
    </div>
  )
}

export default MovieList