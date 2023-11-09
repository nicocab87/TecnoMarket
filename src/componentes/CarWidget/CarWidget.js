import { LuShoppingCart } from "react-icons/lu";
import "./CarWidget.css"

const CartWidget = () => {
    return(
        <div>
            <LuShoppingCart className="carrito" /> 
            <span className="numeroCarrito carrito">0</span>
        </div>

    )
}

export default CartWidget