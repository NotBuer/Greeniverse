import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from "../../services/Services";
import User from "../../models/User";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import './RegisterUser.css';

function RegisterUser() {

    let navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
          id: 0,
          name: "",
          email: "",
          password: "",
          address: "",
          telephone: "",
          userType: "",
        }
    );

    const [userResult , setUserResult] = useState<User>(
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
        if(userResult .id === 0){
            navigate('/login');
        }
    }, [userResult , navigate]);

    function ConfirmPasswordHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmPassword(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        
        if(confirmPassword === user.password){
            try {
                await registerUser(`/api/User/email`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                console.log(error)
                alert('Usuario já cadastrado, tente outro email!')
            }

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return(
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

                    <Typography variant='h3' gutterBottom component='h3' className='text3'> Cadastrar </Typography>

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


                        <TextField
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => ConfirmPasswordHandle(e)}
                            id='ConfirmPassword' label='ConfirmarSenha' variant='outlined' name='ConfirmPassword' margin='normal' type='password' size='small' />

                            
                            <Box marginY={2} textAlign='center' className='button1'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='outlined' className='buttonRegister'>
                                    Cancelar
                                </Button>
                            </Link>
                        
                            <Button type='submit' variant='contained' className='buttonRegister'>
                                Cadastrar
                            </Button>
                        </Box>
                       

                    </form>

                </article>

            </section>
        </main>
    </>
    );
}

export default RegisterUser;