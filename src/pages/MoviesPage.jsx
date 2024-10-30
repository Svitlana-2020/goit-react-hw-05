import css from './MoviesPage.module.css'
// import MovieList from '../components/MovieList';
import { useEffect, useState } from "react";
import { fetchUrlTitle } from '../../api-search.js';
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
const MovieList = lazy(() => import('../components/MovieList.jsx'))

const MoviesPage = () => {

    const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate ();
  
  useEffect(() => {

    if (!query) return;

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

useEffect(() => {
  if (query) {
    navigate(`/movies/query=${query}`);
  }
}, [query, navigate]);

const handleSearch = (newQuery) => {
  setQuery(newQuery)
  // setMovies([])
}

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.elements.title.value;
        if(form.elements.title.value.trim() === "") {
            alert("Please enter search term!")
            return;}
        handleSearch(title);
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
    <Suspense fallback={<p>Loading component...</p>}>
    {!loading && !error && <MovieList movies={movies} />}
    </Suspense>
    </div>
)
    }

export default MoviesPage
