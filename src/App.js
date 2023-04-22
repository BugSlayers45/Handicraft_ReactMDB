import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/User/SignIn/SignIn';
import SignUp from './components/User/SignUp/SignUp';
import UserCart from './components/User/Cart/UserCart';
import PlaceOrder from './components/User/payments/PlaceOrder';


function App() {
  return <>
 
  <Routes>
    <Route path='/' element={ <Home/>} />
  </Routes>
  <Routes> 
    <Route path='/products' element={<ProductPage/>} />
  </Routes>
  <Routes>
    <Route path='/signIn' element={<SignIn/>} />
  </Routes>
  <Routes>
    <Route path='/signUp' element={<SignUp/>} />
  </Routes>
  <Routes>
    <Route path='/cart' element={<UserCart/>} />
  </Routes>
  <Routes>
    <Route path='/orderplace' element={<PlaceOrder/>} />
  </Routes>

  </>
}

export default App;
