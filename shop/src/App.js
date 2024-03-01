
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route  path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
         
      
    </div>
  );
}

export default App;
