import React from "react";
import PropTypes from 'prop-types';

import {ImSearch} from 'react-icons/im'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './MoviesPage.module.css'
import {fetchSearchMovie} from '../services/movies-api'

export default function MoviesPage ({onSubmir}){
    const [searchName, setSearchName]=useState('')
    const [data, setData]=useState([])
    const notPhoto = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png';

    useEffect(()=>{
        if(!searchName){
          return}
        feachCartImg()
      },[searchName])

      const feachCartImg=()=>{
        fetchSearchMovie(searchName)
        .then(data =>{
         console.log(data.results)
          setData(data.results)           
    })}
    const handleFormSubmit = searchName => {
        setSearchName(searchName); 
      };

    const handleNameChange = event => {
     setSearchName(event.currentTarget.value.toLowerCase() );
     };
     
    const handleSubmit = event => {
       event.preventDefault();
   if (searchName.trim() === '') {
         toast.error('Введите имя.');
         return;
       }
       onSubmir(searchName)
       setSearchName("")
     }
   
       return(
           <>
 <header className={s.Searchbar}>
   <form className={s.SearchForm} onSubmit={handleSubmit}>
   <button type="submit" className={s.Searchbutton}>
     <ImSearch/>
       <span className={s.button__label}>Search</span>
     </button>
     <input
       className={s.input}
       type="text"
       autoComplete="off"
        autoFocus
       value={searchName}
       onChange={handleNameChange}
       placeholder="Search images and photos"
     />
   </form>
   
   </header>
{data &&
        data.map(el => {
          return (
            <li key={el.id}>
              <Link to={`/${el.id}`}>
              <img width={100} src={el.poster_path?`https://image.tmdb.org/t/p/w300${el.poster_path}`:notPhoto} />
              <h3>{el.original_title}</h3>
              </Link>
            </li>
          );
        })}
           </>
        

   ) }

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
};


/*export default function MoviesPage() {
    return (
     
<form >
  <input
    type="text"
    autoComplete="off"
     autoFocus
   // value={searchName}
  //  onChange={handleNameChange}
    placeholder="Search images and photos"
  />
  <button type="submit" >

<span >Search</span>
</button>
</form>
    )
}*/