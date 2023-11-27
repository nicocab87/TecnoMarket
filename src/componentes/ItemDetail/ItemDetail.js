import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({id,title,price, image, description}) {
  return (
    <div className='producto'>
            <h1 className='tituloProducto'>{title}</h1>
            <img className='imgProducto' src={image} alt={title}/>
            <h2 className='descripcionProducto'>{description}</h2>
            <button className='button is-info'>Volver</button>
            <h3 className='precioProducto'>${price}</h3>
            <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log(`cantidad agregada ${quantity}`)} />
    </div>
  )
}

export default ItemDetail