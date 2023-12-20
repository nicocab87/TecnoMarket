import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asynMock";
import ListaProductos from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/Firebase"

const ItemListContainer = ({greeting})=> {
    const [ItemList, setItemList] = useState ([]);
    const [loading, setLoading] = useState (true);
    const {categoriaId} = useParams();

    const itemCollectionRef = collection( db, 'items')

    useEffect(() => {
        const getItemList = async () => {
            const data = await getDocs (itemCollectionRef);
            const filteredData = data.docs.map ( (doc)=>({
                ...doc.data(),
                id: doc.id
            }));
            
            setItemList(filteredData);
        }
        getItemList();
       
    },[])

    return(
        <ListaProductos productos={ItemList}/>
    )
}

export default ItemListContainer
