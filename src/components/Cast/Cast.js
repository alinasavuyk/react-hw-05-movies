import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieCredits} from '../services/movies-api'
import s from './Cast.module.css'


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
    
      const actorsEl=actors.slice(0,8)
 return (
    <ul className={s.actor}>
    {actorsEl.length === 0 ? (
      <p>We don't have any actor for this movie</p>
    ) : (
        actorsEl.map((actor => {
        return (
            <li key={actor.cast_id} className={s.actorItem}>
            <img className={s.imgActor} width={20} src={actor.profile_path?`https://image.tmdb.org/t/p/w300${actor.profile_path}`:notPhoto} alt={actor.name} />
            <h4 className={s.actorName}>{actor.name}</h4>
            </li>
        )}))
    )}
  </ul>
  
 )
 }