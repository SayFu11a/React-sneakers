import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return <div className="wrapper clear">

    <Drawer />
    <Header />

    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="serch-block d-flex">
          <img src="\img\serch.svg" alt="Serch" />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>

      {/* <div className="row">
        <div className="column">
          <div className="cart">
            <div className="cart-img">
              <div className="cart-favorite">
                <img src="img\favorite.png" alt="" />
              </div>
              <div className="cart-png"><img src="/img/sneakers/01.jpg" alt="" /></div>
            </div>
            <div className="cart-title">
              <p>Мужские Кроссовки</p>
              <p>Nike Blazer Mid Suede</p>
            </div>
            <div className="cart-footer">
              <div className="cart-price">
                <p>Цена:</p>
                <p>12 999 руб.</p>
              </div>
              <div className="cart-cross">
                <img src="\img\arr.svg" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

    </div>
  </div>

}

export default App;