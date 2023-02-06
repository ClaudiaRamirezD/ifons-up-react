
import './App.css'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Navbar from './assets/components/navbar/Navbar'

const App = () => {
 return (
   <>
     <Navbar></Navbar>
     <ItemListContainer greeting="Soy el item list container!"></ItemListContainer>
   </>
 );
}

export default App;
