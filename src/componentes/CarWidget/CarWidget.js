import { BsCart2 } from "react-icons/bs";
import "./CarWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return(
        <div>
            <Link to='/cart'>
            <BsCart2/>
            <span className="numeroCarrito">{totalQuantity} </span>
            </Link>
        </div>

    )
}

export default CartWidget