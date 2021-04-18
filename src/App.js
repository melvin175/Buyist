
import './App.css'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'
import Wishlist from './components/Wishlist/Wishlist'
import ProductDetails from './pages/ProductDetails'
import {
  Route, Switch
} from "react-router-dom";

function App() {
  return (

    <div className="App font-sans">
     <Header />
     <div className='flex justify-center items-center'>
     
     <Switch>
     <Route path="/shop" component= { Product}  />
     <Route path="/cart" component={ Cart}  />
     <Route path="/wishlist" component= { Wishlist}  />
     <Route path="/productdetails/:id" component= { ProductDetails}  />
     </Switch>
     
     </div>
    </div>
  ); 
}

export default App;
