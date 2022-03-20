import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews} from '../services/movies-api'
import { NavLink, Route, useRouteMatch } from 'react-router-dom'



export default function Reviews(){
    const { castId } = useParams();
    const [reviews, setReviews] = useState([]);
  //  const imgUrl = 'https://image.tmdb.org/t/p/w300';
    useEffect(() => {
        fetchMovieReviews(castId).then(data => {
            console.log(data.results) 
            setReviews(data.results);
           });
      }, [castId]);
    
 return (
    <div>
{reviews.map(review => {
     return   <p key={review.id}>
{review.content}
        </p>
})}
  
    </div>

  
 )
   
 }
 /*
{reviews.map(review => {
     return   <p key={review.cast_id}>
{review.content}
        </p>
})}
   */