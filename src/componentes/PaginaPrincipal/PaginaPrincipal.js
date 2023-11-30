import React, { Component } from 'react';
import "./PaginaPrincipal.css";
import logo from "../ItemListContainer/assets/logo.png"
import DemoCarousel from '../Carrusel/Carrusel';

function PaginaPrincipal() {
    
  return (
    <div className='paginaPrincipal'>
        <div className='tituloDiv div1'>
            <h1 className='titulo title is-3'>Bienvenidos a TecnoMarket!</h1>
            <h3 className='subtitulo subtitle is-4'>Lo mejor del mundo tecnologia lo encontras acá</h3>
        </div>
        <div className='div2'>
            <DemoCarousel />
        </div>
    </div>     
  )
}

export default PaginaPrincipal