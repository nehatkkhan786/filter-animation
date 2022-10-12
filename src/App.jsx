import React, { useState, useEffect } from 'react'
import FIlterButton from './components/FIlterButton'
import Movies from './components/Movies'
import {AnimatePresence} from 'framer-motion'
import { createContext } from 'react'

export const AppContext = createContext()

const App = () => {
const [genres, setGenres] = useState([])
const [popularmovies, setPopularMovies] = useState([])
const [filterMovies, setFilterMovies] = useState([])


const getMovieList = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US&page=1`)
    const movies = await response.json();
    setPopularMovies(movies.results)
    setFilterMovies(movies.results)
}

const getGenerList = async ()=>{
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&language=en-US`);
  const genres = await response.json();
  setGenres(genres.genres)
}

useEffect(()=>{
    getMovieList();
    getGenerList();
}, [])


const value = {

  popularmovies:popularmovies,
  setPopularMovies:setPopularMovies,
  filterMovies:filterMovies,
  setFilterMovies:setFilterMovies,

}



  return (
    <AppContext.Provider value={value}>
    <div className='app'>
        <FIlterButton genres={genres} setFilterMovies={setFilterMovies} />
        <div className='image-container'>
          <AnimatePresence>
            <Movies movies={popularmovies}/>
          </AnimatePresence>
        </div>
    </div>
    </AppContext.Provider>
  )
}

export default App