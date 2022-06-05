import React from 'react';
import './Navbar.css'
import lupa from '../../../assets/navbar/lupa-icon.png'
import logo from '../../../assets/navbar/logo.png'
import profile from '../../../assets/navbar/profile.png'
import bag from '../../../assets/navbar/shopping-bag.png'




function Navbar() {
    return (
      
      <nav>

        <div className="top-promo-banner">
            <span>Frete grátis nas compras acima de R$200,00</span>
        </div>

        <header className="top-nav-bar">

          <img className="logo" src={logo} alt="logo"/>

          <form className="search-box">
            <img className="lupa-icon" src={lupa} alt="lupa"/>
            <input type="text" placeholder="O que voce está procurando?"/>
            <button type="submit">Buscar</button>
          </form>

          <a href="/">Minha conta
            <img className="nav-icon-1" src={profile} alt="user"/>
          </a>

          <a href="/"> Minha sacola
            <img className="nav-icon-2" src={bag} alt="cart"/>
          </a>

        </header>

      <div className="botton-menu-bar">
        <ul className="botton-list">
          <li><a href="/">Ofertas</a></li>
          <li><a href="/">Hortifruti</a></li>
          <li><a href="/">Mercearia</a></li>
          <li><a href="/">Laticínios</a></li>
          <li><a href="/">Ovos e Carnes</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;