import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Component/Admin/Home';
import Product from './Component/Admin/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import EcommerceHome from './Component/Ecommerce/EcommerceHome';
import SingleProduct from './Component/Ecommerce/SingleProduct';
import { Productspage } from './Component/Ecommerce/product/Productspage';
import { Cart } from './Component/Ecommerce/cart/Cart';
import { AddAddress } from './Component/Ecommerce/cart/AddAddress';
import  Payment  from './Component/Ecommerce/cart/Payment';
import { MyOrders } from './pages/MyOrders';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { MyProfile } from './pages/MyProfile';
import { Wishlist } from './Component/Ecommerce/cart/Wishlist';
import { Cartloader } from './utils/Cartloader';
function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<EcommerceHome/>} />
        <Route path="/admin" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/password/forgot' element={<ForgotPassword/>} />
        <Route path='/password/reset/:token' element={<ResetPassword/>} />
        <Route path='/register' element={<Register/>} />
    
        <Route path='user/singleProduct/:id' element ={<SingleProduct />} />
        <Route path="/admin/productadmin" element={<Product/>} />
        <Route path='/user/products' element={<Productspage/>}/>
        <Route path='/user/cart' element={<Cart/>} />
        <Route path='/user/wishlist' element={<Wishlist/>} />
        <Route path='/user/deliver-address' element={<AddAddress/>} />
        <Route path='/user/payment' element={<Payment/>} />
        <Route path='/user/myorders' element={<MyOrders/>} />
        <Route path='/user/myprofile' element={<MyProfile/>} />
        <Route path='/loadercheck' element={<Cartloader/>} />
      </Routes>
    </Router>
  );
}

export default App;
