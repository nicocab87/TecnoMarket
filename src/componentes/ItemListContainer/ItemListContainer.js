import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ListaProductos from "../ItemList/ItemList";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../Config/Firebase"

const ItemListContainer = ()=> {
    const [ItemList, setItemList] = useState ([]);
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
