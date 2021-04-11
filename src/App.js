
import './App.css'

import Header from './components/Header/Header'
import Wishlist from './components/Wishlist/Wishlist'
import ProductCard from './components/ProductCard/ProductCard'
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App font-sans">
     <Header />
     <div className='flex justify-center items-center'>
     {/* <ProductCard/>  */}
     <Wishlist />
     {/* <Product /> */}
     </div>
    </div>
  ); 
}

export default App;
