import { useState } from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');

   return (
         <div className={style.bar}>
               <input className={style.input} type="text" placeholder="Buscar por ID" onChange={(e) => {setId(e.target.value)}}/>
               <button className={style.btn} onClick={() => {onSearch(id)}}>Agregar</button>
         </div>
   );
}

export default SearchBar;