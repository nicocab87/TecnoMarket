import React, { Component } from 'react';
import "./PaginaPrincipal.css";
import DemoCarousel from '../Carrusel/Carrusel';
import { getDoc, collection } from 'firebase/firestore';
/* import{db} from "../../Config/Firebase"; */

function PaginaPrincipal() {

/*   const itemsCollectionRef = collection(db, "items") */
    
  return (
    <div className='paginaPrincipal hero is-large'>
        <div className='tituloDiv div1'>
          <h1 className='titulo title is-3'>Bienvenidos a TecnoMarket!</h1>
          <h3 className='subtitulo subtitle is-4'>Lo mejor del mundo tecnologia lo encontras acá</h3>
        </div>

        <div>

        </div>

        <div className='div2'>
            <DemoCarousel />
        </div>
    </div>     
  )
}

export default PaginaPrincipal