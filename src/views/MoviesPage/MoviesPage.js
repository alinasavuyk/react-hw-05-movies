import React from "react";
import PropTypes from 'prop-types';

import {ImSearch} from 'react-icons/im'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './MoviesPage.module.css'
import {fetchSearchMovie} from '../../components/services/movies-api'

export default function MoviesPage ({onSubmit}){
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
    

    const handleNameChange = event => {
     setSearchName(event.currentTarget.value.toLowerCase() );
     };
     
    const handleSubmit = event => {
       event.preventDefault();
   if (searchName.trim() === '') {
         toast.error('Введите имя.');
         return;
       }
       onSubmit(searchName)
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
   <ul className={s.list}>
{data &&
        data.map(el => {
          return (
            <li key={el.id} className={s.item}>
              <Link to={`/react-hw-05-movies/${el.id}`} className={s.title}>
              <img  className={s.image}  
                             src={el.poster_path?`https://image.tmdb.org/t/p/w300${el.poster_path}`:notPhoto} />
              <h3 className={s.subtitle}>{el.original_title}</h3>
              </Link>
            </li>
          );
        })}
         </ul>
           </>
   ) }

MoviesPage.propTypes = {
  onSubmit: PropTypes.func,
};

