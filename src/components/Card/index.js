import styles from './Card.module.scss'
console.log(styles)
function Card(props) {


   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img src="\img\heart-unliked.png" alt="Unliked" />
         </div>
         <img width={133} height={112} src={props.img} alt="Sneakers" />
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{props.prise} руб.</b>
            </div>
            <button className="button" onClick={props.onClick}>
               <img width={11} height={11} src="\img\arr.svg" alt="Plus" />
            </button>
         </div>
      </div>
   );
}

export default Card;