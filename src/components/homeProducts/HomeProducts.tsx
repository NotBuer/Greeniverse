import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, } from '@material-ui/core'
import { Box, Grid } from '@mui/material'
import './HomeProducts.css'
import { Link } from 'react-router-dom'

function HomeProducts() {
    return (


        <section className="products-section" id="products">

            <h1 className="heading"> Nossos <span>produtos</span> </h1>

            <div className="product-boxes">

                 <div className="product-card">
                    <img src="./src/img/product-1.png" alt="" />
                    <h3>Laranja</h3>
                    <div className="price"> R$4.99</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img src="./src/img/product-2.png" alt="" />
                    <h3>Cebola</h3>
                    <div className="price"> R$4.99</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img src="./src/img/product-3.png" alt="" />
                    <h3>Abacaxi</h3>
                    <div className="price"> R$4.99</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">Comprar</a>
                </div>

                <div className="product-card">
                    <img src="./src/img/product-4.png" alt="" />
                    <h3>Banana</h3>
                    <div className="price"> R$4.99</div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" className="btn">Comprar</a>
                </div>
            </div>
            <a href="/allproducts" className='more-product'>Ver mais...</a>

        </section>
    );
}

export default HomeProducts;