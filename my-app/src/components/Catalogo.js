import React from "react";
import Productos from "./Productos";

export	default function Catalogo(props) {
    const {liBros, onAdd}= props;

    return(
        <main className="block col-2">
            <div className="">
                <h2>Productos</h2>

            </div>

            <div className="row">
                {liBros.map((liBros) => (
                    <Productos key={liBros.id} liBros={liBros} onAdd={onAdd} ></Productos>
                ) )}
            </div>
        </main>
    );
}



