import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
// ====

function App() {
  const [items, setItems] = React.useState([])
  const [cartItem, setCartItem] = React.useState([])
  const [isCartOpened, setIsCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://63a826327989ad3286fb1b90.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json)
      });
  }, []);


  const onAddToCart = (obj) => {
    setCartItem((prev) => [...prev, obj])
  };


  console.log(cartItem);


  return <div className="wrapper clear">
    {isCartOpened && <Drawer cartItem={cartItem} onClickClose={() => setIsCartOpened(false)} />}
    <Header onClickCart={() => setIsCartOpened(true)} />

    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все кроссовки</h1>
        <div className="serch-block d-flex">
          <img src="\img\serch.svg" alt="Serch" />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item) =>
          <Card
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onFavorite={() => { }}
            onPlus={(obj) => onAddToCart(obj)}
          />
        )}
      </div>
    </div>
  </div>
}

export default App;