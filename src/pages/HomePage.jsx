import MovieList from '../components/MovieList'

const HomePage = ({ movies, loading, error }) => {
  console.log(movies)
return      <div>
{loading && <p>Loading movies...</p>}
{error && <p>Something went wrong, please try again.</p>}
{!loading && !error && <MovieList movies={movies} />}
</div>
}

export default HomePage
