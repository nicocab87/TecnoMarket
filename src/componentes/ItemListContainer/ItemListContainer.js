import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import ListaProductos from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting})=> {
    const [productos, setProductos] = useState ([])
    const {categoriaId} = useParams()

    useEffect(()=>{
        const asyncFun = categoriaId ? getProductsByCategory : getProducts


        asyncFun (categoriaId)
            .then(Response =>{
                setProductos(Response)
            })
            .catch(error =>{
                console.log(error)
            })
        },[categoriaId])

    return(
        <div className="greeting">
            {/* <h1 className="greetingLetra">{greeting} </h1> */}
            <ListaProductos productos={productos} />
        </div>

    )
}

export default ItemListContainer    
