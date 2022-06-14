import React from 'react';
import './ListOrder.css';

function ListOrder() {
    return (
      <>
      <div className='list'>
        <h2>Nossa Feira</h2>
        <ul className=''>
          <li>Frutas</li>
          <li>Legumes</li>
          <li>Verduras</li>
          <li>Ovos e carnes</li>
          <li>Mercearia</li>
          <li>Bebidas e laticínios</li>
          <li>Corpo e Casa</li>
        </ul>
        <div>
          <h2>Ordenar</h2>
          <ul>
            <li>Menor preço</li>
            <li>Maior preço</li>
            <li>Alfabética</li>
          </ul>
        </div>
      </div>
      </>
    );
  }
  
  export default ListOrder;