import { Box } from '@material-ui/core';
import React from 'react';
import CardProducts from '../../cardProducts/CardProducts';
import './Product.css'


function Product() {
  return (
    <>
  <Box display="flex" flexWrap="wrap" justifyContent="center">
    <CardProducts />
  </Box>
    
    </>
  );
}

export default Product;
