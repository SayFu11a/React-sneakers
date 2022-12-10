function Card(props) {
   return (
      <div className="card">
         <div className="favorite">
            <img src="\img\heart-unliked.png" alt="Unliked" />
         </div>
         <img width={133} height={112} src={props.img} alt="Sneakers" />
         <h5>{props.name}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{props.prise} руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="\img\arr.svg" alt="Plus" />
            </button>
         </div>
      </div>
   );
}

export default Card;