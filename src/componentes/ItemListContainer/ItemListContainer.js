import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import ListaProductos from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/Firebase"

const ItemListContainer = ({greeting})=> {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {categoriaId} = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoriaId ? query(collection(db, 'items'), where('category', '==', categoriaId)) : collection(db, 'items')

        getDocs(collectionRef)
        .then(response => {
            const productAdapted = response.docs.map (doc => {
                const data = doc.data()
                return {id: doc.id, ...data}

            })
            setProductos (productAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally( ()=> {
            setLoading(false)
        })
    }, [])
}

export default ItemListContainer
