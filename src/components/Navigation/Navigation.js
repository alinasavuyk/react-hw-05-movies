import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css";


const Navigation = () => (
    <nav className={s.navigation}>
         <NavLink
      
      to="/react-hw-05-movies"
      className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
    >
      Movies
    </NavLink>
        </nav>
)
  






export default Navigation;