import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CardProducts from '../../cardProducts/CardProducts';
import './Product.css'
import Navbar from '../navbar/Navbar';


function Product() {
  return (
    <>
    <Navbar />
    <Container>
    <Box display="flex" flexWrap="wrap" justifyContent="center">
    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='tituloProduto'>Nossos produtos</Typography>
    </Box>
    <CardProducts />
  
  </Container>
    </>
  );
}


export default Product;
 