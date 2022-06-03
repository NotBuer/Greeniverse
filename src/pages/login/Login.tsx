import React, { useState, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css';

function Login() {
    return (
        <>
            <main>
                <section>
                    <article id='form_login'>


                        <Typography variant='h3' gutterBottom component='h3'> Entrar </Typography>

                        <TextField id='user' label='E-mail' variant='outlined' name='user' margin='normal' size='small' />
                        <TextField id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' size='small' />


                        <Button className='buttonLogin' type='submit' variant='contained' size="small"> Login </Button>
                    </article>
                    <article id='img'>
                        <img src="https://i.imgur.com/G5Vhf5L.png" alt="Logo" />
                    </article>
                </section>
            </main>
        </>
    );
}

export default Login;