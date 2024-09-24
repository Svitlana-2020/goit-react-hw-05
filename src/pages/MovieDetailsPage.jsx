import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPage } from "../../api-page";
import css from '../pages/MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(movieId);
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchPage(movieId); // Получение данных по movieId
        console.log(data);
        setMovieData(data);
      } catch (err) {
        console.error("Ошибка при получении данных:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails(); // Вызов функции
  }, [movieId]);

   if (!movieData) {
    return <p>Loading...</p>;}

  return (
    <div>
      {loading && <p>Loading movies...</p>}
      {error && <p>Something went wrong, please try again.</p>}
      <div>
      <button type="button" className={css.button}>
      <Link to={`/movies/`} className={css.link}>Go back</Link></button>
      <div className={css.photoText}>
      <img className={css.image} 
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={`${movieData.title} poster`}  />
      <span  className={css.wrapper}>
        <h1 className={css.title}>{movieData.title}</h1>
        <p className={css.text}>User Score: {movieData.vote_average.toFixed(1)} </p>
        <p className={css.largeText}>Overview</p>
        <p className={css.text}>{movieData.overview}</p>
        <p className={css.largeText}>Genres</p>
        <p className={css.text}>{movieData.genres.map((genre) => genre.name).join(", ")}</p>
        </span>
        </div>
      </div>
      <div>
        <h2 className={css.text}>Additional information</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to={`/movies/${movieData.id}/cast`}>Cast</Link>
          </li>
          <li className={css.item}>
            <Link to={`/movies/${movieData.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
