import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div className='hero is-large bg-blue'>
      <div className="box is-flex-direction-column is-justify-content-space-evenly is-align-content-center hero-body">
        <p className="subtitle">404</p>
        <h1 className="title">Pagina no encontrada</h1>
        <p className="subtitle">Lo siento, no hemos podido encontrar la pagina que buscas.</p>
        <div className="button">  <Link to="/">Volver al inicio</Link> </div>
      </div>
    </div>
  )
}

export default NotFound