import React from 'react'

export default function Productos(props) {
    const {liBros, onAdd} = props;
    return (
    <div>
        <img className="small" src={liBros.imagen} alt={liBros.titulo} />
        <h3>{liBros.titulo}</h3>
        <div>${liBros.precio}</div>
        <div>
            <button onClick={() => onAdd(liBros)}  > Añadir al Carrito</button>
        </div>
    </div>
  )
}   
