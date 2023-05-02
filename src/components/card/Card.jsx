import style from './Card.module.css'
const Card = (props) => {
   const {name, status, species, gender, origin, onClose} = props;
   return (
      <div className={style.cardContainer}>
         <div className={style.box}>
               <img className={style.img} src={props.image} alt='No Hay img'/>
         </div>
            <div className={style.content}>
               <h2>Name: {name}</h2>
               <h2>Status: {status}</h2>
               <h2>Species: {species}</h2>
               <h2>Gender: {gender}</h2>
               <h2>origin: {origin}</h2>
               <button onClick={onClose}>cerrar</button>
            </div>
      </div>
   );
}
export default Card;