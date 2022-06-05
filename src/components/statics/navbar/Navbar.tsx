import React from 'react';
import './Navbar.css'

function Navbar() {
    return (
      <nav>

        <div className="top-promo-banner">
            <span>Frete grátis nas compras acima de R$200,00</span>
        </div>

        <header className="top-nav-bar">

          <img className="logo" src="./src/img/logo.png" alt="logo"/>

          <form className="search-box">
            <img className="lupa-icon" src="./src/img/lupa-icon.png" alt="lupa"/>
            <input type="text" placeholder="O que voce está procurando?"/>
            <button type="submit">Buscar</button>
          </form>

          <a href="/">Minha conta
            <img className="nav-icon-1" src="./src/img/profile.png" alt="cart"/>
          </a>

          <a href="/"> Minha sacola
            <img className="nav-icon-2" src="./src/img/shopping-bag.png" alt="user"/>
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