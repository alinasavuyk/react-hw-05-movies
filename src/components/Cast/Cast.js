import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieCredits} from '../services/movies-api'
import { NavLink, Route, useRouteMatch } from 'react-router-dom'



export default function Cast(){
    const { castId } = useParams();
    const [actors, setActors] = useState([]);
  //  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  const notPhoto = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png';
    useEffect(() => {
        fetchMovieCredits(castId).then(data => {
            console.log(data.cast) 
            setActors(data.cast);
           });
      }, [castId]);
    
      const actorsEl=actors.slice(0,5)
 return (
  
    <ul>
{actorsEl.map(actor => {
     return   <li key={actor.cast_id}>
<img width={20} src={actor.profile_path?`https://image.tmdb.org/t/p/w300${actor.profile_path}`:notPhoto} alt={actor.name} />
<h4>{actor.name}</h4>
        </li>
})}
    </ul>
  
 )
 }