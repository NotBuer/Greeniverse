import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, } from 'react-router-dom';
import { login } from '../../services/Services';
import User from '../../models/User';
import AuthenticationDTO from '../../models/AuthenticationDTO';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    /* Local storage no longer supported, now we are using redux. So
       replace everywhere in the project that still using the local
       storage with redux */
    // const [token, setToken] = useLocalStorage('token');

    const [user, setUser] = useState<AuthenticationDTO>(
        {
            email: '',
            password: ''
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/api/Authentication`, user, setToken);
            alert("Login realizado com sucesso!");
        } catch (error) {
            console.log(error);
            alert("Email ou senha incorretos, verifique e tente novamente!");
        }
    }

    useEffect(() => {
        if (token !== '') {
            dispatch(addToken(token));
            navigate('/home');
        }
    }, [token, navigate]);


return (
    <>
        <main id='mnId'>
            <section>
                <article id='form_login'>
                    <a id='Iconback' href="http://localhost:3000/home" target="black" rel="noopener noreferrer">
                        <ArrowBackSharpIcon style={{ fontSize: 30, color: "black", alignItems: "flex-start" }} />
                    </a>

                    <Typography variant='h3' gutterBottom component='h3' className='text2'> Entrar </Typography>

                    <form onSubmit={onSubmit} id='form_login'>
                        <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' size='small' />
                        <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' size='small' />
                        <input type="password" id="field-password" className="field-password" placeholder="*******"></input>
                        {/* <i className="fa-solid fa-eye" id="eye" onClick={showPassword}></i>
                        <i className="fa-solid fa-eye-slash" id="eye-slash" onClick={showPassword}></i> */}
                        <Button className='buttonLogin' type='submit' variant='contained' size="small" > Login </Button>
                    </form>

                    <Box borderBottom={1}>
                        <Link to='/registeruser'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texts1'> Não tem uma conta ainda? Cadastre-se </Typography>
                        </Link>

                        <p className='ForgotThePass'>Ou</p>
                    </Box>

                    <Box className='Icons' display='flex' justifyContent='center' marginTop={3}>

                        <a href="" target="black" rel="noopener noreferrer">
                            <GoogleIcon style={{ fontSize: 40, color: "red" }} />
                        </a>

                        <a href="" target="black" rel="noopener noreferrer">
                            <FacebookIcon style={{ fontSize: 40, color: "blue" }} />
                        </a>

                        <a href="" target="black" rel="noopener noreferrer">
                            <TwitterIcon style={{ fontSize: 40, color: "blue" }} />
                        </a>
                    </Box>

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