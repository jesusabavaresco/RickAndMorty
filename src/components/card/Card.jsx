import style from './Card.module.css'
const Card = (props) => {
   const {name, status, species, gender, origin, onClose} = props;
   return (
      <div className={style.cardContainer}>
         <div className={style.box}>
               <img className={style.img} src={props.image} alt='No Hay img'/>
         </div>
               <h2>{name}</h2>
            <div className={style.content}>
               <p>Status: {status}</p>
               <p>Species: {species}</p>
               <p>Gender: {gender}</p>
               <p>origin: {origin}</p>
            </div>
               <button className={style.btn} onClick={onClose}>cerrar</button>
      </div>
   );
}
export default Card;