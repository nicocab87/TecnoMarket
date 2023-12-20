import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import { CartContext } from '../../context/CartContext';
import "bulma/css/bulma.css"

function ItemDetail({id,title,price, image, description, stock}) {
  const [quantityAdded, setQuantyAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantyAdded(quantity)

    const item = {
      id, title, price, image
    }

    addItem(item, quantity)
  }

  

  return (
    <div className='detalle hero'>
      <div className='productoDetalle hero-body'>
              <h1 className='tituloProductoDetalle div2Detalle title is-2'>{title}</h1>
              <img className='imgProductoDetalle div1Detalle' src={image} alt={title}/>
              <h2 className='descripcionProducto div3Detalle subtitle is-4'>{description}</h2>
              <Link to="/productos" className='button is-info div6Detalle'>Volver</Link>
              <h3 className='precioProductoDetalle div4Detalle subtitle is-5'> ${price} </h3>
              {(quantityAdded > 0 ) ? (<Link to='/cart' className='button is-success is-outlined button'>Terminar compra</Link>) : 
              (<ItemCount initial={0}  stock={stock}  onAdd={handleOnAdd}/>)}
      </div>
    </div>
  )
}

export default ItemDetail