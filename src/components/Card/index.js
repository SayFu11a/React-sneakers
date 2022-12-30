import React from 'react';
import styles from './Card.module.scss'

function Card({ imgUrl, title, price, onPlus, onFavorite }) {
   const [isOnPlus, setIsOnPlus] = React.useState(false);

   const onClickPlus = () => {
      onPlus({ imgUrl, title, price })
      setIsOnPlus(!isOnPlus);
   }

   React.useEffect(() => { }, [isOnPlus])

   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={onFavorite}>
            <img src="\img\heart-unliked.png" alt="Unliked" />
         </div>
         <img width={133} height={112} src={imgUrl} alt="Sneakers" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isOnPlus ?
               "/img/btn-cheked.svg" :
               "/img/btn-plus.svg"
            } alt="Plus" />
         </div>
      </div>
   );
}

export default Card;