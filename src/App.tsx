import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import RegisterUser from './pages/register/RegisterUser';
import Payment from './pages/payment/Payment';
import './App.css';
import store from './store/store';
import AboutUs from './pages/aboutUs/AboutUs';
import Product from './components/statics/product/Product';
    

function App() {
    useEffect(() => {
        document.title = "Greeniverse";
    }, []);

    return (

  
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/registeruser' element={<RegisterUser />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/product' element={<Product />} />
                    

                </Routes>

            </Router>
        </Provider>

    )
}

export default App;