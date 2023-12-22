import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "bulma/css/bulma.css"
import "./CartItem.css"
import "../Cart/Cart.css"
import { MdOutlineCancel } from "react-icons/md";


function CartItem() {
  const {cart,removeItem}= useContext(CartContext)
  return (
    <div>
      {cart.map((item)=>{
        return(
          <div className='productoCarrito box' key={item.id}>
            <div className='tituloCarrito'>{item.title} </div>
            <img src={item.image} alt={item.title} className='image is-64x64 imgCarrito'/>
            <div className='cantidadCarrito'>x{item.quantity}</div>
            <div className='precioCarrito'>${item.price * item.quantity} </div>
            <MdOutlineCancel onClick={()=>removeItem(item.id)} className='removeItem' />
            
           </div>

        )
      })}
    </div>
  )
}

export default CartItem