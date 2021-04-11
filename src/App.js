
import './App.css'

import Header from './components/Header/Header'
import Wishlist from './components/Wishlist/Wishlist'
import Product from "./components/Product/Product";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App font-sans">
     <Header />
     <div className='flex justify-center items-center'>
     <Router>
     <Route path="/wishlist" component={ Wishlist}  />
     <Route path="/product" component= { Product}  />
     </Router>
     </div>
    </div>
  ); 
}

export default App;
