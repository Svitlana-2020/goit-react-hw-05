import css from './App.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
return (
    <nav className={css.nav}>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/movies" >
          Movies
        </NavLink>
      </nav>
)
}

export default Navigation