import React from 'react'
import "./App.css";
import Navbar from "./component/header/Navbar";
import Home from "./component/pages/home/Home";
import Shop from './component/pages/shop/Shop';
import About from './component/pages/about/About';
import Blog from './component/pages/blog/Blog';
import Contact from './component/pages/contact/Contact';
import Pages from './component/pages/pages/Pages';
import Profile from './component/pages/profile/Profile';
import Login from './component/pages/login/Login';
import Cart from "./component/pages/cart/Cart";
import SupportUs from './component/pages/supportUs/SupportUs';
import NotFound from "./component/pages/error/NotFound";
import Footer from "./component/footer/Footer";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/pages' element={<Pages />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/supportus' element={<SupportUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
