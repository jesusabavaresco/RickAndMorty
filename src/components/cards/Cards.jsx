import Card from '../card/Card.jsx';
import style from './Cards.module.css';

const Cards = ({characters, onClose}) => {
   return ( 
   <div className={style.container}>
      {
         characters.map(({id, name, status, species, gender, origin, image}) => {
            return (
               <Card
                  key = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image} alt='No hay img' 
                  onClose = {onClose}
                  id = {id}
               />
            )
         })
      }
   </div>
   );
}
export default Cards
