import { NavLink } from 'react-router-dom';
import style from './Card.module.css'
import {addFav, removeFav} from '../../Redux/actions'
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

const Card = (props) => {
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name,  status, species, gender, origin, image});
      setIsFav(!isFav);
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={style.cardContainer}>
      
         <NavLink to={`/detail/${id}`}>
         <div className={style.box}>
               <img className={style.img} src={props.image} alt='No Hay img'/>
         </div>
            <h2 className={style.name}>{name}</h2>
            {/* <div className={style.content}>
               <p>Status: {status}</p>
               <p>Species: {species}</p>
               <p>Gender: {gender}</p>
               <p>origin: {origin}</p>
            </div> */}
         </NavLink>
               <button className={style.btn} onClick={() => {onClose(id)}}>cerrar</button>
               {
         isFav ? (
         <button className='cora' onClick={handleFavorite}>❤️</button>
         ) : (
         <button className='cora' onClick={handleFavorite}>🤍</button>
         )
         }
      </div>
   );
};
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);