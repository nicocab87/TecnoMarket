import React from 'react';
import "./producto.css";
import { Link } from 'react-router-dom';
import "bulma/css/bulma.css"


function Producto({id, title, price, description, image}) {

    return (
        <article className='producto box'>
            <h1 className='tituloProducto title is-6'>{title}</h1>
            <img className='imgProducto ' src={image} alt={title}/>
            <Link to={`/productos/${id}`} className='button is-info'>Detalles</Link>
            <h3 className='precioProducto'>${price}</h3>
        </article>
    )
}

export default Producto