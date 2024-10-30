import css from './MoviesPage.module.css'
import MovieList from '../components/MovieList';
import { useEffect, useState } from "react";
import { fetchUrlTitle } from '../../api-search.js';
// import { lazy, Suspense } from 'react';
import { useSearchParams } from "react-router-dom";

// const MovieList = lazy(() => import('../components/MovieList.jsx'))

const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    async function getMoviesByTitle () {
      try {
        setLoading(true);
      setError(false);
      const data = await fetchUrlTitle(query);
      console.log(data.results)
      setMovies(data.results);
        
      } catch (e) {
        setError(e.message);
      }
    finally {
      setLoading(false);
    }
    } getMoviesByTitle();

}, [searchParams])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.elements.title.value;
        if(form.elements.title.value.trim() === "") {
            alert("Please enter search term!")
            return;}
            setSearchParams({ query: title });
        // form.reset();
}

return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
        name = "title"
          type="text"
          placeholder="Search movies"
        />
        <button className={css.btn} type="submit">Search</button>
      </form> 
   
    {loading && <p>Loading movies...</p>}
    {error && <p>Something went wrong, please try again.</p>}
    {!loading && !error && <MovieList movies={movies} />}
    </div>
)
    }

export default MoviesPage
