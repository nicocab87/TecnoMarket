import "bulma/css/bulma.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App (){
    return(
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={`Bienvenidos`} />}/>
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="*" element={<h1>Lo siento! No se ha podido encontrar la pagina</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}