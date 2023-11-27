import React, { useState } from 'react';
import "./itemCount.css"



function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState (initial)

    function increment (){
        quantity < stock && setQuantity(quantity+1)
    }

    function decrement (){
        quantity > 1 && setQuantity(quantity-1)
    }

  return (
    <div className='counter'>
        <div className='controls buttons are-small'>
            <button className='boton button is-info is-inverted' onClick={decrement}>-</button>
            <h4 className='numero'>{quantity} </h4>
            <button className='boton button is-info is-inverted' onClick={increment}>+</button>  
        </div> 
        <div>
            <button className='boton button is-info is-inverted' onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount