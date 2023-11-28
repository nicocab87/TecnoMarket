import "bulma/css/bulma.css"
import "./NavBar.css"
import CartWidget from "../CarWidget/CarWidget"
import { NavLink } from "react-router-dom"

const imgLogo = "./assets/logo.png"

export default function NavBar(){
    return(
        <nav className="navBar">
                <ul className="listado">
                    <li className="logo"><NavLink to="/">TECNOMARKET </NavLink></li>
                    <li className="item"><NavLink to="/">Inicio</NavLink></li>
                    <li className="item"><NavLink to="productos">Producto</NavLink></li>
                    <li className="item"><NavLink to="nosotros">Sobre Nosotros</NavLink></li>
                    <li className="item"><NavLink to="sucursales">Sucursales</NavLink></li>
                    <CartWidget/>
                </ul>
        </nav>
    )
}