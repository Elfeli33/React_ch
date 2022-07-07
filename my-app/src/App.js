import React from 'react';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import data from './data'
import { useState } from 'react';

const App = () =>{
  const {liBros} = data;
  const {itemsCarrito, setItemsCarrito} = useState([]);
  const onAdd = (liBros) => {
    const exist = itemsCarrito.find((x) => x.id === liBros.id)
    if(exist) {
      setItemsCarrito(
        itemsCarrito.map((x) =>
        x.id === liBros.id ? {...exist, qty: exist.qty +1} : x
        )
        );
      } else {
        setItemsCarrito([...itemsCarrito, {...liBros, qty:  1}])
      }
    };
    
    const onRemove = (liBros) => {
      const exist = itemsCarrito.find((x) => x.id === liBros.id);
      if (exist.qty === 1) {
        setItemsCarrito(itemsCarrito.filter((x) => x.id !== liBros.id));
      } else {
        setItemsCarrito(
          itemsCarrito.map((x) =>
          x.id === liBros.id ? { ...exist, qty: exist.qty - 1 } : x
          )
          );
        }
      };
      return(
      
    <div className='App'>
          <NavBar />
          <div className='row'>
          <Catalogo liBros={liBros} onAdd={onAdd}></Catalogo> 
          <Carrito itemsCarrito={itemsCarrito} onAdd={onAdd} onRemove={onRemove}></Carrito>
          </div>
    </div>
  );
}


export default App;
