import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "bulma/css/bulma.css"
import "./CartItem.css"
import "../Cart/Cart.css"

function CartItem() {
  const {cart}= useContext(CartContext)
  return (
    <div>
      {cart.map((item)=>{
        return(
          <div className='productoCarrito cartItem' key={item.id}>
            <div className='tituloCarrito'>{item.title} </div>
            <img src={item.image} alt={item.title} className='image is-64x64 imgCarrito'/>
            <div className='cantidadCarrito'>x{item.quantity}</div>
            <div className='precioCarrito'>${item.price * item.quantity} </div>
           </div>

        )
      })}
    </div>
  )
}

export default CartItem