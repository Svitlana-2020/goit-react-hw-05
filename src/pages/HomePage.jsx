// import MovieList from '../components/MovieList'
import { useEffect, useState, lazy, Suspense } from 'react';
import {fetchUrl} from '../../api-movies.js'

const MovieList = lazy(() => import('../components/MovieList.jsx'))

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  
  console.log(movies)
  
return      <div>
{loading && <p>Loading movies...</p>}
{error && <p>Something went wrong, please try again.</p>}
<Suspense fallback={<p>Loading component...</p>}>
{!loading && !error && <MovieList movies={movies} />}
</Suspense>
</div>
}

export default HomePage
