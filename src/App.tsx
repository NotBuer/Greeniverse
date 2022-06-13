import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import RegisterUser from './pages/register/RegisterUser';
import './App.css';
import store from './store/store';
<<<<<<< HEAD
import Providers from './pages/providers/Providers'
=======
import AboutUs from './pages/aboutUs/AboutUs';
import Product from './components/statics/product/Product';
import Providers from './pages/providers/Providers';
    

>>>>>>> fd9093dfe26f0d6a829280ebae383d921b64a5c2
function App() {
    useEffect(() => {
        document.title = "Greeniverse";
    }, []);

<<<<<<< HEAD
    return ( 
             <Provider store={store}>
                <Router>
                    <Routes>
=======
    return (

  
        <Provider store={store}>
            <Router>
                <Routes>
>>>>>>> fd9093dfe26f0d6a829280ebae383d921b64a5c2
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/registeruser' element={<RegisterUser />} />
<<<<<<< HEAD
                    <Route path='/providers' element={<Providers/>} />
=======
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/providers' element={<Providers />} />
                </Routes>
>>>>>>> fd9093dfe26f0d6a829280ebae383d921b64a5c2

                </Routes>
            </Router>
<<<<<<< HEAD
        </Provider>       
=======
        </Provider>

>>>>>>> fd9093dfe26f0d6a829280ebae383d921b64a5c2
    )
}

export default App;