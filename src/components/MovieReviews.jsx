import css from '../pages/MovieDetailsPage.module.css'

const MovieReviews = ({reviews:{results}}) => {
    console.log(results)
    if (!results || results.length === 0) {
        return <p>No reviews available.</p>;}

    return (
        <ul className={css.castList}>
            {results.map((review) => (
            <li key={review.id}>
            <p className={css.largeText}>author: {review.author}</p>
            <p className={css.text}>{review.content}</p>
            </li>))}
        </ul>
    )
    }
    
    export default MovieReviews