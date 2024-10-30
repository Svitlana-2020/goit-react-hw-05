import css from '../pages/MovieDetailsPage.module.css'
import {useParams, useState} from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPage } from '../../api-page';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);

    // const location = useLocation();
    // const results = location.state?.reviews;
  
        useEffect(() => {
            const loadReviews = async () => {
                try {
                    const data = await fetchPage(movieId); // используем API-функцию для загрузки данных
                    setReviews(data.reviews);
                } catch (err) {
                    console.error(err);
                    setError(true);
                }
            };
    
            loadReviews();
        }, [movieId]);

    console.log(reviews)
    if (!reviews || reviews.length === 0) {
        return <p>No reviews available.</p>;}

    return (
        <ul className={css.castList}>
            {reviews.map((review) => (
            <li key={review.id}>
            <p className={css.largeText}>author: {review.author}</p>
            <p className={css.text}>{review.content}</p>
            </li>))}
        </ul>
    )
    }
    
    export default MovieReviews