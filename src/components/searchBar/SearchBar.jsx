import style from './SearchBar.module.css';
const SearchBar = ({onSearch}) => {
   return (
      <div className={style.bar} >
         <input className={style.input} type="text" placeholder="Buscar"/>
         <button className={style.btn} onClick={(onSearch) => window.alert('Hiciste click')}>Agregar</button>
      </div>
   );
}

export default SearchBar;