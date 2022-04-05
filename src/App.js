import { Routes,Route } from "react-router-dom";
import {lazy, Suspense} from "react";
import Navigation from "./components/Navigation/Navigation";
import s from './app.module.css'

const HomePage=lazy(()=>import('./components/HomePage/HomePage'/*webpackChunkName:'home-page' */))
const MoviesPage=lazy(()=>import('./components/MoviesPage/MoviesPage' /*webpackChunkName:'movies-page' */))
const MovieDetailsPage=lazy(()=>import('./components/MovieDetailsPage/MovieDetailsPage'/*webpackChunkName:'details-page' */))


function App() {

  return (
    <div>
       <header className={s.header}>
      <Navigation />
    </header>
    <Suspense fallback={<h1>Загрузка...</h1>}>
    <Routes>
    <Route  path="/" element={<HomePage />} />
    <Route  path="/:movieId/*" element={<MovieDetailsPage/>} />
    <Route path="/movies" element={   <MoviesPage  />} />
    </Routes>
    </Suspense>
   
   
       
    
    </div>
   
  );
}

export default App;
