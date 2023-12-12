import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartItem() {
  const {cart}= useContext(CartContext)
  return (
    <div>
      {cart.map((item)=>{
        return(
          <div key={item.id}>
            <div>{item.title} </div>
            <div>{item.price}</div>
            <img src={item.image} alt={item.title}/>
           </div>

        )
      })}
    </div>
  )
}

export default CartItem