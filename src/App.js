import "bulma/css/bulma.css"
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


export default function App (){
    return(
        <div>
            <NavBar/>

            <ItemListContainer greeting={`Bienvenidos`}/>

        </div>
    )
}