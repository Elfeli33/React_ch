import React from "react";

export default function Carrito(props) {
    const { itemsCarrito, onAdd, onRemove} = props;
    return(
        <aside className="block col-1">
            <h2>Carrito:</h2>
            <div> {itemsCarrito.length === 0 && <div>Carrito vacío</div>},
            {itemsCarrito.map((liBros) => (
                <div key={liBros.id} className="row">
                    <div className="col-2">{liBros.titulo}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(liBros)} className="add">+</button>
                        <button onClick={() => onRemove(liBros)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {liBros.qty} x ${liBros.precio.toFixed(2)}
                    </div>
                </div>
            ))}
            </div>    
        </aside>

    );
}