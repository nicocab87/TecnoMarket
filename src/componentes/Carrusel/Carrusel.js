import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { photosCarrusel } from '../../asynMock';
import "./Carrusel.css"

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                {photosCarrusel.map((prod)=>{
                    return (
                        <div className='carrusel' key={prod.id}>
                            <img className='imgCarrusel' src={prod.image} />
                            <p className="legend">{prod.title}</p>
                        </div>
                    )
                })}
            </Carousel>
        );
    }
};

export default DemoCarousel
