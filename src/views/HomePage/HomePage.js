import { useState, useEffect } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import {fetchTrendingMovie} from '../../components/services/movies-api';


export default function HomePage() {
    const [trendFilms, setTrendFilm] = useState(null);
    useEffect(() => {
       fetchTrendingMovie().then(data => {
           console.log(data.results) 
            setTrendFilm(data.results);
          });
      }, []);


    return (
        <div>
          {trendFilms && (
        <ul>
          {trendFilms.map(film => (
            <li key={film.id}>
                <Link to={`${film.id}`}>
                {film.original_title}
                </Link>
            </li>
          ))}
        </ul>
      )}
            
        </div>
       
    )
}