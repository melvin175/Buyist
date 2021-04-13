
import './App.css'

import Header from './components/Header/Header'
import Wishlist from './components/WishlistCard/Wishlist'
import Product from "./components/Product/Product";

import {
  Route, Switch
} from "react-router-dom";

function App() {
  return (

    <div className="App font-sans">
     <Header />
     <div className='flex justify-center items-center'>
     
     <Switch>
     <Route path="/wishlist" component={ Wishlist}  />
     <Route path="/product" component= { Product}  />
     </Switch>
     
     </div>
    </div>
  ); 
}

export default App;
