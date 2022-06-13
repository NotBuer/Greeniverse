import { Console } from 'console';
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [menuActive, setMenuActive] = useState(false)
    function showMenu() {
        setMenuActive(true)

        if (menuActive === false) {
            setMenuActive(true)
        }
        else {
            setMenuActive(false)
        }

    }

    async function OnSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        // TODO: Implement search query...
    }

    return (

        <nav id='navbar'>

            <section id="logo-section">
                <a href="/home#banner" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
            </section>

            <section className={`${menuActive === true ? 'active' : ''}`} id='menu'>
                <Link to="/home">Home</Link>
                <a href="/home#features">Benefícios</a>
                <a href="/allproducts">Produtos</a>
                <Link to="/providers">Seja um fornecedor</Link>
                <Link to="/aboutus">Sobre nós</Link>
            </section>

            <section id='icons'>
                <i className="fas fa-bars" id="menu-btn" onClick={showMenu}></i>
                <i className="fas fa-search" id="search-btn"></i>
                <i className="fas fa-shopping-cart" id="cart-btn"></i>
                <i className="fas fa-user" id="login-btn"></i>
            </section>

            <form className='search-form' onSubmit={OnSubmit}>
                <input type="search" id='search-box' placeholder='buscar produtos...' />
                <label htmlFor="searc-box" className='fas fa-search'></label>
            </form>

            <form className="login-form">
                <h2> Fazer Login</h2>
                <a href="/login" className="btn">Logar</a>
                <a href="/registeruser" className="btn">Cadastrar</a>
            </form>

        </nav>

    )
}

export default Navbar;