import React from 'react';
import './Navbar.css'
import lupa from '../../../assets/navbar/lupa-icon.png'
import logo from '../../../assets/navbar/logo.png'
import profile from '../../../assets/navbar/profile.png'
import bag from '../../../assets/navbar/shopping-bag.png'


function Navbar() {
  return (

      <nav id='navbar'>

        <section id='logo'>
          <a href="#" id="logo"><img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" /> Greeniverse</a>
        </section>

        <section id='menu'>
          <a href="#home">Home</a>
          <a href="#features">Benefícios</a>
          <a href="#products">Produtos</a>
          <a href="/">Seja um fornecedor</a>
          <a href="/">Indique um amigo</a>
          <a href="./">Sobre nós</a>
        </section>

        <section id='icons'>
          <i className="fas fa-bars" id="menu-btn"></i>
          <i className="fas fa-search" id="search-btn"></i>
          <i className="fas fa-shopping-cart" id="cart-btn"></i>
          <i className="fas fa-user" id="login-btn"></i>
        </section>

      </nav>

  )
}

export default Navbar;