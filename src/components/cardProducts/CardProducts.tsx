import React, { useEffect, useState } from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import './CardProducts.css';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stock from '../../models/StockDTO';
import { busca } from '../../services/Services';
import ListOrder from '../../components/listorder/ListOrder';

export default function CardProducts() {

    const [products, setProducts] = useState<Stock[]>([]);
    let navigate = useNavigate();

    async function getProduct() {
        await busca("/api/Stock", setProducts, {

        })
    }

    useEffect(() => {

        getProduct()

    }, [products.length])

    return (
        <>
        
            {
                products.map(product => {
                    return (
                        <Card className='root'>
                            <CardActionArea>
                                <CardMedia
                                    className='imgCard'
                                    component="img"
                                    alt={product.productName}
                                    image={product.productPhoto}
                                    title={product.productName} />

                                <CardContent>
                                <img src="https://i.imgur.com/ptzY2Mh.png" alt="logo" className='logoCard' />
                                    <Typography gutterBottom variant="h5" color="textPrimary" component="h4">
                                        {product.productName}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {product.productCategory}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Fornecedor: {product.provider}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='cardbtns'>
                                <h3>
                                    R$ {product.price}
                                </h3>
                                <button type="submit" value="submit" className='btnComprar'>
                                    Comprar
                                </button>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </>
    );
}