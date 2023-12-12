import "bulma/css/bulma.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/Cart";

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
                        <Route path="*" element={<h1>Lo siento! No se ha podido encontrar la pagina</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}