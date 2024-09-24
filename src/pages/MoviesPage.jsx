import css from './MoviesPage.module.css'
import MovieList from '../components/MovieList';

const MoviesPage = ({loading, error, movies, onSearch}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.elements.title.value;
        if(form.elements.title.value.trim() === "") {
            alert("Please enter search term!")
            return;}
        onSearch(title);
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
