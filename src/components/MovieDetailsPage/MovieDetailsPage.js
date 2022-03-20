import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieId} from '../services/movies-api'
import { NavLink,Link,Outlet, Route, Routes,useNavigate} from 'react-router-dom'
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';


export default function MovieDetailsPage(){
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const goBack = () => navigate(-1);

    useEffect(() => {
        fetchMovieId(movieId).then(data => {
            console.log(data) 
            setMovie(data);
           });
      }, [movieId]);
    

 return (
     <>
     <button onClick={goBack}> Go Back </button>
     <div>  
  {movie && (
        <>
          <img width={250} src={movie.poster_path? `${imgUrl}${movie.poster_path}`: ''} alt={movie.id} />
        <h2>{movie.title} ({movie.release_date})</h2>
         <p>{movie.overview}</p>
         <h2>Жанр: </h2>
         <h3>Additional information</h3>
         <ul>
             <li> <NavLink to={`${movie.id}/cast`}>Cast</NavLink></li>
           

             <li><NavLink to={`${movie.id}/reviews`}>Reviews</NavLink></li>
             </ul>
             <Routes> <Route  path="/:castId/cast" element={<Cast/>} /></Routes>
             <Routes> <Route  path="/:castId/reviews" element={<Reviews/>} /></Routes>
        </>
      )}
     
     </div>
  
     </>
   
  
  
 )
    
 

}
/*<Routes> 
    <Route  path="/:movieId/:castId" element={<Cast/>} />
    </Routes>
     <Outlet /> */