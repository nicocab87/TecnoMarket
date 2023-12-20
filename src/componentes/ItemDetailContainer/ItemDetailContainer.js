import { useState, useEffect } from "react";
import React from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase";


function ItemDetailContainer() {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams()

    const docRef = doc( db, 'items', itemId)

    useEffect(() => {
       getDoc(docRef)
       .then (response => {
        const data = response.data()
        const productAdapted = {id: response.id, ...data}
        setProduct(productAdapted)
       })
       .catch(error => {
        console.log(error)
       })
       
    },[itemId])

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer