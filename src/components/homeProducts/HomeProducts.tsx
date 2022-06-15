import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, } from '@material-ui/core'
import { Box, Grid } from '@mui/material'
import './HomeProducts.css'
import { Link } from 'react-router-dom'

function HomeProducts() {
    return (
        <>
            <Container>
                <h2 className='tituloproduto'> Nossos Produtos </h2>
                <Box className='cards'>
                    <Card className='rootHome'>
                        <CardActionArea>
                            <CardMedia
                                className='imgCardHome'
                                component="img"
                                alt="Romã"
                                image='https://i.imgur.com/iuWmzfh.jpeg'
                                title="Produto Batata orgânica"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Romã
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Romã
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='cardbtns'>
                            <h3>
                                R$ 3,99
                            </h3>
                            <Button className='btnComprar'>
                                Comprar
                            </Button>
                        </CardActions>
                    </Card>



                    <Card className='rootHome'>
                        <CardActionArea>
                            <CardMedia
                                className='imgCardHome'
                                component="img"
                                alt="Batata"
                                image='https://i.imgur.com/otm2alo.jpeg'
                                title="Produto Batata orgânica"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Limão
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="p">
                                   Limão de qualidade
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='cardbtns'>
                            <h3>
                                R$ 3,99
                            </h3>
                            <Button className='btnComprar'>
                                Comprar
                            </Button>
                        </CardActions>
                    </Card>



                    <Card className='rootHome'>
                        <CardActionArea>
                            <CardMedia
                                className='imgCardHome'
                                component="img"
                                alt="Batata"
                                image='https://i.imgur.com/U7IB65J.jpeg'
                                title="Produto Batata orgânica"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Cenoura
                                </Typography>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    Cenoura laranja
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='cardbtns'>
                            <h3>
                                R$ 3,45
                            </h3>
                            <Button className='btnComprar'>
                                Comprar
                            </Button>
                        </CardActions>
                    </Card>
                </Box>

                <Box className='box-mais'>
                    <Link to='/allproducts' className='link'>
                        <Button className='btn-mais'>
                            Veja mais
                        </Button>
                    </Link>
                </Box>

            </Container>
        </>
    );
}

export default HomeProducts;