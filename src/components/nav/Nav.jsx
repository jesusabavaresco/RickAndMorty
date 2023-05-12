import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";

const nav = ({onSearch, random}) => {
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <div className={style.addR}>
            <button className={style.btn} onClick={() => random()}>Agregar Random</button>
            </div>
            <div className={style.home}>
            <NavLink to={'/home'}>
                <button className={style.btn}>Home</button>
            </NavLink>
            </div>
            <div className={style.about}>
            <NavLink to={'/about'}>
                <button className={style.btn}>Sobre mi</button>
            </NavLink>
            <NavLink to={'/favorites'}>
                <button className={style.btn}>Favorites</button>
            </NavLink>
            </div>
        </div>
    )
}
export default nav;