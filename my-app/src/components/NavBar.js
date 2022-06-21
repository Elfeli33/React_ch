import React from "react"
import logo from '../../components/assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './NavBar.css'
const NavBar = () => {
    return(
        <div class="Header">
        <img src={logo} alt=""/>
        <h1>DIOMEDES LIBROS</h1>
        <nav>
            <a href="">Productos</a>
            <a href="">Nosotros</a>
            <a href="">Contacto</a>
        </nav>
        <ShoppingCartIcon HomeIcon sx={{ fontSize: 40 }} />
        </div>

    )
}

export default NavBar