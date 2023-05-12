import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './Detail.module.css';

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
         return setCharacter({});
    }, [id])
  return (
    <div className={style.container}>
      <NavLink to={'/home'}>
        <button className={style.btn}>Atras</button>
      </NavLink>
        <div className={style.detail}>
            <img src={character.image && character.image} alt=''/>
            <h1>{character.name && character.name}</h1>
            <h1>{character.status && character.status}</h1>
            <h1>{character.species && character.species}</h1>
            <h1>{character.gender && character.gender}</h1>
            <h1>{character.origin?.name && character.origin?.name}</h1>
        </div>
    </div>
  )
}
export default Detail;
