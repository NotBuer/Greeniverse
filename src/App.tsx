import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegisterUser from './pages/register/RegisterUser';

function App() {
    useEffect(()=> {
        document.title ="Greeniverse";
    }, []);

    return (
        <Router>
            <div style={{ minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/registeruser" element={<RegisterUser />} />
                </Routes>
            </div>
        </Router>

    )
}

export default App;