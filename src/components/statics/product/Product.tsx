import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CardProducts from '../../cardProducts/CardProducts';
import './Product.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ListOrder from '../../listorder/ListOrder';


function Product() {
  return (
    <>
      <Navbar />

      <h3 className='titleProduct'>Nossos<span className='colortitle'> Produtos</span></h3>
      <div className='listAndCard'>
        <div className='listOrder'><ListOrder /></div>
        <Container className='screenProduct'>
          <CardProducts />
        </Container>
      </div>
      
      <Footer />

    </>
  );
}


export default Product;
