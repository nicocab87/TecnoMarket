import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import {db} from '../../Config/Firebase'
import { collection, getDocs, query, Timestamp, writeBatch, addDoc, documentId, where} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [loading,setLoading]= useState(false);
    const [orderId, setOrderId] = useState('');

    const {cart,total,clearCart} = useContext(CartContext);

    let stock = cart.stock

    const createOrder = async ({nombre,phone,email}) =>{
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    nombre,phone,email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date ())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ida= cart.map(prod=> prod.id)
            const productsRef = collection ( db , 'items' )
            console.log(ida)
            const productsAddedFromFirestore = await getDocs(productsRef)
            const {docs} =productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data();
                console.log('dataDoc:', dataDoc);
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.prodQuantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock:stockDb - prodQuantity})
                }else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection (db,'orders')
                const orderAdded = await addDoc ( orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error('hay productos que estan fuera de stock')
                console.log('stock:', stock);
                
            }
           
        
        } catch (error){
            console.log(error)
        }finally{
            setLoading(false)
        }

    }

    if (loading) {
        console.log('Se esta guardando')
        return <h1>Se esta guardando su orden</h1>
    }
    if(orderId){
        console.log('enviado')
    return <h1>El ID de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout


