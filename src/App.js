import "bulma/css/bulma.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/Cart";
import NotFound from "./pages/NotFound";
import Checkout from "./componentes/Checkout/Checkout";

export default function App (){
    return(
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="productos" element={<Productos/>}/>
                        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
                        <Route path="/productos/:itemId" element={<ItemDetailContainer/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}