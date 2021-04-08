
import './App.css'

import Header from './components/Header/Header'
import Products from './components/Header/Products'

function App() {
  return (
    <div className="App">
     <Header />
     <div className='flex justify-center items-center'>
     <Products/>
     <Products/>
     <Products/>
     <Products/>
     </div>
     
    </div>
  );
}

export default App;
