function Header(props) {
   return (
      <header className="d-flex justify-between align-center p-40">
         <div className="align-center d-flex">
            <img width={40} height={40} src="/img/h001.png" alt="" />
            <div>
               <h3>REACT SNEAKERS</h3>
               <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
         </div>

         <ul className="d-flex">
            <li className="mr-30 cu-p" onClick={props.onClickCart}>
               <img width={18} height={17} src="/img/h02.svg" alt="" />
               <span>1205 руб.</span>
            </li>
            <li>
               <img width={21} height={19} src="/img/h03.svg" alt="" />
            </li>
            <li>
               <img className="img-mr0" width={20} height={20} src="/img/h04.svg" alt="" />
            </li>
         </ul>
      </header>
   );
}

export default Header;