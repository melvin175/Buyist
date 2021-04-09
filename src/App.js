
import './App.css'

import Header from './components/Header/Header'
import Products from './components/ProductCard/ProductCard'
import Product from './components/Product/Product'
import Wishlist from './components/Wishlist/Wishlist'

function App() {
  return (
    <div className="App font-sans">
     <Header />
     <div className='flex justify-center items-center'>
     {/* <Products/>  */}
     <Wishlist />
     </div>
    </div>
  ); 
}

export default App;
