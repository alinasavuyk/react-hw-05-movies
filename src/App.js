import { Routes,Route } from "react-router-dom";
import {lazy, Suspense} from "react";
import Navigation from "./components/Navigation/Navigation";
import s from './app.module.css'

const HomePage=lazy(()=>import('./views/HomePage/HomePage'/*webpackChunkName:'home-page' */))
const MoviesPage=lazy(()=>import('./views/MoviesPage/MoviesPage' /*webpackChunkName:'movies-page' */))
const MovieDetailsPage=lazy(()=>import('./views/MovieDetailsPage/MovieDetailsPage'/*webpackChunkName:'details-page' */))


function App() {

  return (
    <div>
       <header className={s.header}>
      <Navigation />
    </header>
    <Suspense fallback={<h1>Загрузка...</h1>}>
    <Routes>
    <Route  path="/react-hw-05-movies" element={<HomePage />} />
    <Route  path="/react-hw-05-movies/:movieId/*" element={<MovieDetailsPage/>} />
    <Route path="/movies" element={   <MoviesPage  />} />
    </Routes>
    </Suspense>
   
   
       
    
    </div>
   
  );
}

export default App;
