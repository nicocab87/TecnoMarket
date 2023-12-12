import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

const Cart = ()=> {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div>
                <h1>No hay items en el carrito todavia!</h1>
                <Link to='/productos' className='button'>Productos</Link>
            </div>
        )
    }
  return (
    <div className='cart'>
        <CartItem className="cartItem"/>
        <h3 className='totalAndClearCart'>total: ${total}</h3>
        <button onClick={()=> clearCart()} className='Button'>Limpiar carrito </button>
        <Link className='pagarCart' to='/checkout'>checkout</Link>
    </div>
  )
}

export default Cart