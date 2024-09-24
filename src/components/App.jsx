// import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation.jsx";
import HomePage from '../pages/HomePage.jsx'; 
import MoviesPage from '../pages/MoviesPage.jsx'; 
import MovieDetailsPage from '../pages/MovieDetailsPage.jsx'; 
import MovieCast from './MovieCast.jsx'; 
import MovieReviews from './MovieReviews.jsx'; 
import NotFound from '../pages/NotFound'; 
// import css from './App.module.css'; 
import {fetchUrl} from '../../api-movies.js'
import { useEffect, useState } from 'react';
import { fetchUrlTitle } from '../../api-search.js';
// import urls from '../../urls.json'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {

  async function getMovies () {
  try {
    setMovies([])
      setLoading(true);
      setError(false);
      const data = await fetchUrl('trendingMoviesUrl');
      setMovies(data.results);
      
    } 
  catch {
      setError(true);
    }
  finally {
    // setLoading(false);
  }}

  getMovies()
  }, [])

  useEffect(() => {
    async function getMoviesByTitle () {
      try {
        setLoading(true);
      setError(false);
      setQuery(query);
      const data = await fetchUrlTitle(query);
      console.log(data.results)
      setMovies(data.results);
        
      } catch {
        setError(true);
      }
    finally {
      setLoading(false);
    }
    } getMoviesByTitle();

}, [query])


const handleSearch = (newQuery) => {
  setQuery(newQuery)
  // setMovies([])
}

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage movies={movies} loading={loading} error={error} />} />
        <Route path="/movies" element={<MoviesPage movies={movies} onSearch={handleSearch}/>} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
