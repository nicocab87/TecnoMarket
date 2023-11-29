import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

function ItemDetail({id,title,price, image, description}) {
  return (
    <div className='detalle'>
      <div className='productoDetalle'>
              <h1 className='tituloProductoDetalle div2Detalle title is-2'>{title}</h1>
              <img className='imgProductoDetalle div1Detalle image 256x256' src={image} alt={title}/>
              <h2 className='descripcionProducto div3Detalle subtitle is-4'>{description}</h2>
              <Link to="/productos" className='button is-info div6Detalle'>Volver</Link>
              <h3 className='precioProductoDetalle div4Detalle subtitle is-5'>${price}</h3>
              <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log(`cantidad agregada ${quantity}`)} />
      </div>
    </div>
  )
}

export default ItemDetail