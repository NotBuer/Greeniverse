import { Console } from 'console';
import React, { useState } from 'react';
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
  return (

    <nav id='navbar'>

      <section id="logo-section">
        <a href="#" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
      </section>

      <section className={`${menuActive === true ? 'active' : ''}`} id='menu'>
        <a href="#home">Home</a>
        <a href="#features">Benefícios</a>
        <a href="#products">Produtos</a>
        <a href="/">Seja um fornecedor</a>
        <a href="/">Indique um amigo</a>
        <a href="./">Sobre nós</a>
      </section>

      <section id='icons'>
        <i className="fas fa-bars" id="menu-btn" onClick={showMenu}></i>
        <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-shopping-cart" id="cart-btn"></i>
        <i className="fas fa-user" id="login-btn"></i>
      </section>

      <form className='search-form'>
        <input type="search" id='search-box' placeholder='buscar produtos...' />
        <label htmlFor="searc-box" className='fas fa-search'></label>
      </form>

      <form className="login-form">
        <button type="submit" value="Logar" className="btn"> Logar</button>
        <button type="submit" value="Cadastrar" className="btn"> Cadastrar</button>
      </form>

    </nav>

  )
}

export default Navbar;