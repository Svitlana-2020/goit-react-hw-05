import { useEffect, useState, Suspense, useRef } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchPage } from "../../api-page";
import css from '../pages/MovieDetailsPage.module.css'
// import { useLocation } from 'react-router-dom';
// import MovieCast from '../components/MovieCast'
// import MovieReviews from "../components/MovieReviews";

// const MovieCast = lazy(() => import('../components/MovieCast.jsx'))
// const MovieReviews = lazy(() => import('../components/MovieReviews.jsx'))

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [showCast, setShowCast] = useState(false);
  // const [showReviews, setShowReviews] = useState(false);


  const navigate = useNavigate();
  // const location = useLocation();
  const prevList = useRef(location.state);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); 
    } else {
      navigate(prevList); 
    }
  };

  useEffect(() => {
    // console.log(movieId);
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchPage(movieId); // Получение данных по movieId
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
      <button type="button" className={css.button} onClick={handleGoBack}>
      Go back</button>
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
        <Suspense fallback={<div>Loading page...</div>}>
        <nav className={css.list}>
          <li className={css.item}>
          <NavLink to="cast" className={css.linkButton}>
            Cast
            </NavLink>
          </li>
          <li className={css.item}>
          <NavLink to="reviews" className={css.linkButton}>
          Reviews
            </NavLink>
          </li>
        </nav>
        <Outlet />
        </Suspense>
        <div>
        {/* <Suspense fallback={<div>Loading subpage...</div>}> */}

        {/* {showCast && <MovieCast credits={movieData.credits} />}
        {showReviews && <MovieReviews reviews={movieData.reviews} />} */}
        {/* <Outlet /> */}

        {/* </Suspense> */}
        </div>
      </div>
    </div>
    
  );
};


export default MovieDetailsPage;


