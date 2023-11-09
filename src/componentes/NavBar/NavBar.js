import "bulma/css/bulma.css"
import "./NavBar.css"
import CartWidget from "../CarWidget/CarWidget"

const imgLogo = "./assets/logo.png"

export default function NavBar(){
    return(
        <nav className="navBar">
                <ul className="listado">
                    <li className="logo"><a href="#">TECNOMARKET </a></li>
                    <li className="item"><a href="#">Inicio</a></li>
                    <li className="item"><a href="#">Producto</a></li>
                    <li className="item"><a href="#">Sobre Nosotros</a></li>
                    <li className="item"><a href="#">Sucursales</a></li>
                    <CartWidget/>
                </ul>
        </nav>
    )
}