import React, { ChangeEvent, useEffect, useState }  from "react";
import { Link, useNavigate } from 'react-router-dom';
import  { registerUser }  from "../../services/Services";
import User from "../../models/User";
import { Grid, Typography, Button, TextField, FormControl, InputLabel, Select } from '@material-ui/core';
import { Box } from "@mui/material";
import './RegisterUser.css';

function RegisterUser(){
    
    let navigate = useNavigate();

    const [confirmPassword, setConfirmPassword] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
          id: 0,
          name: "",
          email: "",
          password: "",
          address: "",
          photo: ""
        }
    );

    const [userResult , setUserResult] = useState<User>(
        {
            id: 1,
            name: "",
            email: "",
            password: "",
            address: "",
            photo: ""

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
                await registerUser(`/api/User`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Usuario já cadastrado, tente outro email!')
            }

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='img2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text2'>Cadastrar</Typography>
                        
                        <TextField
                            value={user.name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='name' label='Nome' variant='outlined' name='name' margin='normal' fullWidth />

                        <TextField
                            value={user.email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth />
                        
                        <TextField
                            value={user.password}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='password' label='Senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        
                        
                        <TextField
                            value={confirmPassword} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => ConfirmPasswordHandle(e)}
                            id='ConfirmPassword' label='ConfirmarSenha' variant='outlined' name='Confirmpassword' margin='normal' type='password' fullWidth />
                       
                        
                       <TextField
                            value={user.address}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='address' label='Endereço' variant='outlined' name='address' margin='normal' fullWidth />

                             
                        <TextField
                            value={user.photo}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='photo' label='Foto' variant='outlined' name='photo' margin='normal' fullWidth />
                        
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Box marginY={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='outlined' className='btnCancel'>
                                        Cancelar
                                    </Button>
                                </Link>
                            </Box>
                            <Box marginY={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                        Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterUser;