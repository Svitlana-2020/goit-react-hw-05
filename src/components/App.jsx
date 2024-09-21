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
// import {fetchUrl} from '../../api-movies.js'

function App() {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {

  // async function getMovies () {
  // try {
  //     setLoading(true);
  //     setError(false);
  //     const data = await fetchUrl();
  //     setMovies(prevMovies => [...prevMovies, ...data.results]);
  //   } 
  // catch {
  //     setError(true);
  //   }
  // finally {
  //   setLoading(false);
  // }
  // getMovies()
  // } []})

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
