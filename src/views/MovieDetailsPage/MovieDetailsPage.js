import { useState, useEffect, lazy,Suspense } from 'react';
import { useParams} from 'react-router-dom';
import {fetchMovieId} from '../../components/services/movies-api'
import { NavLink,Link, Route, Routes,useNavigate} from 'react-router-dom'
import s from './MovieDetailsPage.module.css'


const Cast=lazy(()=>import('../Cast/Cast'/*webpackChunkName:'cast' */))
const Reviews=lazy(()=>import('../Reviews/Reviews'/*webpackChunkName:'reviews' */))

export default function MovieDetailsPage(){
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';


    useEffect(() => {
        fetchMovieId(movieId).then(data => {
            console.log(data) 
            setMovie(data);
           });
      }, [movieId]);
    

 return (
     <div className={s.bodyMovie}>
     <button  type="button" className={s.button}> <Link to='/'> Go Back</Link></button>
     <div >  
  {movie && (
        <div >
          <div className={s.Movie}>
          <div className={s.MovieElement}>
          <img className={s.imageMovie} width={250} src={movie.poster_path? `${imgUrl}${movie.poster_path}`: ''} alt={movie.id} />
          </div>
          <div className={s.MovieElement}>
        <h2>{movie.title} ({movie.release_date})</h2>
         <p>{movie.overview}</p>
         <h2>Жанр: </h2>
         <ul>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
        </div>
        </div>
      <div className={s.actorList}>
         <h2>Additional information</h2>
         <ul>
             <li  className={s.link}> <NavLink to={`${movie.id}/cast`}>Cast</NavLink></li>
             <li  className={s.link}><NavLink to={`${movie.id}/reviews`}>Reviews</NavLink></li>
             </ul>
             </div>
             
             <Suspense fallback={<div>Loading...</div>}>
             <Routes> <Route  path="/:castId/cast" element={<Cast/>} /></Routes>
             <Routes> <Route  path="/:castId/reviews" element={<Reviews/>} /></Routes>
             </Suspense>
             
        </div>
      )}
     
     </div>
  
     </div>
   
  
  
 )
    
 

}
/*<Routes> 
    <Route  path="/:movieId/:castId" element={<Cast/>} />
    </Routes>
     <Outlet /> */