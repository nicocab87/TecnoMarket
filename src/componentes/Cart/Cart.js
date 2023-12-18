import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

const Cart = ()=> {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div className='hero is-large'>
                <div className='hero-body is-flex-direction-column is-justify-content-space-evenly is-align-content-center box'>
                    <h1 className='subtitle is-3'>No hay items en el carrito todavia!</h1>
                    <h2 className='subtitle is-4'>Ve y agrega algo!</h2>
                    <Link to='/productos' className='button subtitle is-5'>Productos</Link>
                </div>
            </div>
        )
    }
  return (
    <div className='cart'>
        <CartItem className="cartItem"/>
        <h3 className='totalCart subtitle is-6'>total a pagar: ${total}</h3>
        <button onClick={()=> clearCart()} className='button'>Limpiar carrito </button>
        <Link className='pagarCart button is-red' to='/checkout'>checkout</Link>
    </div>
  )
}

export default Cart