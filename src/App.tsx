import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegisterUser from './pages/register/RegisterUser';
import './App.css';


function App() {
    useEffect(()=> {
        document.title ="Greeniverse";
    }, []);

    return (
        <Router>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                </Routes>
        </Router>
    )
}

export default App;