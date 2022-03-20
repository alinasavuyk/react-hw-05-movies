import { Routes,Route } from "react-router-dom";
import { useState, useEffect} from "react";
import Navigation from "./components/Navigation/Navigation";
import HomePage from './components/HomePage/HomePage'
import MoviesPage from './components/MoviesPage/MoviesPage'
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import s from './app.module.css'


function App() {
 

  return (
    <div>
       <header className={s.header}>
      <Navigation />
    </header>
    
    <Routes>
    <Route  path="/" element={<HomePage />} />
    <Route  path="/:movieId/*" element={<MovieDetailsPage/>} />
  
    <Route path="/movies" element={   <MoviesPage  />} />
    </Routes>
   
       
    
    </div>
   
  );
}

export default App;
