import React from 'react';
import "./producto.css";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Producto({id, title, price, description, image}) {

    return (
        <article className='producto'>
            <h1 className='tituloProducto'>{title}</h1>
            <img className='imgProducto' src={image} alt={title}/>
            <Link to={`/item/${id}`} className='button is-info'>Detalles</Link>
            <h3 className='precioProducto'>${price}</h3>
            <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log(`cantidad agregada ${quantity}`)} />
        </article>
    )
}

export default Producto