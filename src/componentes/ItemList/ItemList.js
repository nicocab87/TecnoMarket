import React from 'react';
import Producto from '../Item/Item';
import "./itemList.css"

function ListaProductos({productos}) {

  return (
    <div className='productosLista'>
      {productos && Array.isArray(productos) && productos.map(prod => <Producto key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ListaProductos