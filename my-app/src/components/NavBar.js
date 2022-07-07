import React from "react"
import logo from '../assets/logo.png'

import './navBar.css'

const navBar = () => {
    return(
        
        <div class="Header">
             
            <div class="casco">
            <img src={logo} alt=""/>
            </div>

            <div class="Nom">
                <h1>DIOMEDES LIBROS</h1>
                <h3>Nuevos - Leídos - Textos - Rarezas</h3>
            </div>

            <div class="nav1">
                <a href="">Productos</a>
                <a href="">Nosotros</a>
                <a href="">Contacto</a>
            </div>

            <div class="user">
                <a id="usr" href="">Ingresar</a>
                <a id="usr" href="">Registrarse</a>
            </div>

            <div class="cartIcon">
                <a id="carrito" href="">Carrito: </a>
                <a href="carrito"></a>

            </div>

        </div>
    );
}

export default navBar;