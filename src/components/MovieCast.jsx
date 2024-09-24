import css from '../pages/MovieDetailsPage.module.css'

const MovieCast = ({credits}) => {
   
    if (!credits.cast || credits.cast.length === 0) {
        return <p>No cast information available.</p>;}

        const { cast } = credits;

    return (
        <ul className={css.castList}>
            {cast.map((actor) => (
            <li key={actor.id}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
            alt={`${actor.name} photo`}/>
            <p className={css.largeText}>{actor.name}</p>
            <p className={css.text}>character: {actor.character}</p>
            </li>))}
        </ul>
    )
    }
    
    export default MovieCast