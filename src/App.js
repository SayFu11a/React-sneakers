import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
// ====


const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    prise: "12 999",
    img: "/img/sneakers/01.jpg"
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    prise: "16 299",
    img: "/img/sneakers/02.jpg"
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    prise: "8 499",
    img: "/img/sneakers/03.jpg"
  },
  {

    title: 'Кроссовки Puma X Aka Boku Future Rider',
    prise: "8 999",
    img: "/img/sneakers/04.jpg"
  },
]


function App() {
  return <div className="wrapper clear">


    <Header />
    {//
    }
    {//<Drawer />
    }
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
        {arr.map((obj) =>
          <Card
            title={obj.title}
            prise={obj.prise}
            img={obj.img}
            test={12323}
            onClick={() => alert(5)}
          />
        )}
      </div>
    </div>
  </div>

}

export default App;