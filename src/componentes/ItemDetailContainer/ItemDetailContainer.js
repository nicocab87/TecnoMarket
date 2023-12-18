import { useState, useEffect } from "react";
import React from 'react'
import { getProductById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDocs } from "firebase/firestore";
import { db } from "../../Config/Firebase";


function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {itemId}=useParams();

    useEffect (() => {
        setLoading(true)
        const docRef = doc(db, 'items', itemId)
        
        getDocs(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }) 
        .catch (error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    useEffect (() => {
        getProductById(itemId)
            .then (response => {
                setProduct (response)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [itemId])

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer