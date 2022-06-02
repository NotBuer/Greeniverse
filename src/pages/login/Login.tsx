import React, { useState, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css';

function Login(){
    return(
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texts1'> Enter </Typography>
                        <TextField id='user' label='User' variant='outlined' name='user' margin='normal' fullWidth />
                        <TextField id='password' label='Password' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'> Login </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Don't have an account yet? </Typography>
                        </Box>
                        <Link to='/registeruser'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texts1'> Sign-up </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='image'>

            </Grid>
        </Grid>
        </>
    );
}

export default Login;