import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews} from '../services/movies-api'
import s from './Review.module.css'


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
  {reviews.length > 0 ? (
      <>
          <ul className={s.list}>
              {reviews.map((review) => (
                  <li key={review.id} className={s.item}>
                      <h2 c>{review.author}</h2>
                      <p className={ s.desc}>{review.content}</p>
                  </li>
              ))}
          </ul>
      </>
  ) : (<p>No Reviews</p>)}
</div>
 )
   
 }
