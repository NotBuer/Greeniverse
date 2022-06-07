import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from "../../services/Services";
import User from "../../models/User";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import './RegisterUser.css';

function RegisterUser() {

    let navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
<<<<<<< HEAD
            id: 0,
            name: "",
            email: "",
            password: ""
=======
          id: 0,
          name: "",
          email: "",
          password: "",
          address: "",
          telephone: "",
          userType: "",
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709
        }
    );

    const [userResult, setUserResult] = useState<User>(
        {
            id: 1,
            name: "",
            email: "",
            password: "",
            address: "",
            telephone: "",
            userType: "",
        }
    );

    useEffect(() => {
<<<<<<< HEAD

        if (userResult.id === 0) {
            navigate('/login');
        }

    }, [userResult, navigate]);
=======
        if(userResult .id === 0){
            navigate('/login');
        }
    }, [userResult , navigate]);
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709

    function ConfirmPasswordHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value)
    }

<<<<<<< HEAD
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

=======
    function updatedModel(e: ChangeEvent<HTMLInputElement>){
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

<<<<<<< HEAD
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

=======
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709
        e.preventDefault();

        if (confirmPassword === user.password) {
            try {
                await registerUser(`/api/User/email`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                console.log(error)
                alert('Usuario já cadastrado, tente outro email!')
            }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <>
            <main>
                <section>
                    <article id='img2'>
                        <img src="https://i.imgur.com/G5Vhf5L.png" alt="Logo" />
                    </article>
                    <article id='form_register'>
                        <a id='Iconback' href="/login" target="black" rel="noopener noreferrer">
                            <ArrowBackSharpIcon style={{ fontSize: 30, color: "black", alignItems: "flex-start" }} />
                        </a>

                        <Typography variant='h3' component='h3' className='text3'> Cadastrar </Typography>

                        <form onSubmit={onSubmit} id='form_register'>

                            <TextField value={user.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='name' label='Nome' variant='outlined' name='name' margin='normal' size='small' />

                            <TextField
                                value={user.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' size='small' />

                            <TextField
                                value={user.password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' size='small' />


<<<<<<< HEAD
                            <TextField
                                value={confirmPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => ConfirmPasswordHandle(e)}
                                id='ConfirmPassword' label='ConfirmarSenha' variant='outlined' name='Confirmpassword' margin='normal' type='password' size='small' />
=======
                        <TextField
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => ConfirmPasswordHandle(e)}
                            id='ConfirmPassword' label='ConfirmarSenha' variant='outlined' name='ConfirmPassword' margin='normal' type='password' size='small' />
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709


                            <Box  marginY={2} textAlign='center' className='buttons'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='buttonRegister'>
                                        Cancelar
                                    </Button>
                                </Link>

                                <Button type='submit' variant='contained' className='buttonRegister'>
                                    Cadastrar
                                </Button>
                            </Box>

                            <Box className='Icons' display='flex' justifyContent='center' marginTop={3}>

                                <a href="" target="black" rel="noopener noreferrer">
                                    <GoogleIcon style={{ fontSize: 40, color: "red" }} />
                                </a>

<<<<<<< HEAD
                                <a href="" target="black" rel="noopener noreferrer">
                                    <FacebookIcon style={{ fontSize: 40, color: "blue" }} />
                                </a>

                                <a href="" target="black" rel="noopener noreferrer">
                                    <TwitterIcon style={{ fontSize: 40, color: "blue" }} />
                                </a>
                            </Box>

                        </form>

                    </article>

                </section>
            </main>
        </>
=======
            </section>
        </main>
    </>
>>>>>>> dffc203b1a8b9b66925b49bc154515242e198709
    );
}

export default RegisterUser;