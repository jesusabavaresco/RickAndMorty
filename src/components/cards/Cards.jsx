import Card from '../card/Card.jsx';
import style from './Cards.module.css';

const Cards = ({characters}) => {
   return ( 
   <div className={style.container}>
      {
         characters.map(({onSeach, id, name, status, species, gender, origin, image, onClose}) => {
            return (
               <div className={style.boxCard}>
               <Card
                  search = {onSeach}
                  key = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image} alt='No hay img' 
                  onClose = {() => window.alert('Emulamos que se cierra la card')}
               />
               </div>
               
            )
         })
      }
   </div>
   );
}
export default Cards
