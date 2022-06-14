<<<<<<< HEAD
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Navbar from '../../components/statics/navbar/Navbar';
import { Box } from "@mui/material";
import './Providers.css';
import { ChangeEvent } from "react";
=======
import './Providers.css'
import React from "react";

>>>>>>> 7dcbe5a644ebadecfb3ad185bd773da75e0188cb

function Providers() {
  return (
    <>
<<<<<<< HEAD
    <Navbar />
    <Grid className="gridBox"direction='column' justifyContent='flex-start' alignItems='flex-end'>
        <Grid item xs={4} alignItems='center'>
          <Typography variant='h5' gutterBottom component='h5' className='text'> Greeniverse </Typography>
          <Grid direction='column' justifyContent='flex-start' alignItems='center'></Grid>
          <Box>
            <form >
              <Typography variant='h4' gutterBottom component='h4' align='center' className='text3'> Enviar uma solicitação </Typography>
              <TextField id='none' label='E-mail' variant='filled' name='email' margin='normal' fullWidth />
              <TextField id='none' label='CNPJ' variant='filled' name='CNPJ' margin='normal' fullWidth />
              <TextField id='none' label='Assunto' variant='filled' name='about' margin='normal' fullWidth />
              <TextField id='none' label='Descrição' variant='filled' name='descrption' margin='normal' fullWidth />
=======
>>>>>>> 7dcbe5a644ebadecfb3ad185bd773da75e0188cb

      <main className='provider-body'>
        <section className='provider-section'>
          <h1 className='provider-title'>Enviar uma solicitação</h1>
          <form className='provider-form'>
            <input type="email" name="E-mail" className='provider-input' autoComplete="off" placeholder="E-mail" />

<<<<<<< HEAD
              <Box marginTop={5} textAlign='center'>
                <Button type='submit' variant='contained' className='buttonProviders'>Enviar </Button>
                <Link to='/home' className='text-decorator-none'></Link>
              </Box>
            </form>
          </Box>
        </Grid>
     </Grid>
     </>
  );
}
export default Providers;
=======
            <input type="cnpj" name="cnpj" className='provider-input' autoComplete="off" placeholder="CNPJ" />

            <input type="assunto" name="assunto" className='provider-input' autoComplete="off" placeholder="Assunto" />

            <input type="descrição" name="descrição" className='provider-input2' autoComplete="off" placeholder="Descrição" />
          </form>
          <p className='provider-p'>
            Assim que for possível um Fundador(a) da Greeniverse responderá a sua solicitação.</p>
          <p className='provider-p2'>Desde já agradecemos.
          </p>
          <button type='submit' className='btn'>Enviar </button>
        </section>
      </main>
    </>
  )
}
export default Providers;


>>>>>>> 7dcbe5a644ebadecfb3ad185bd773da75e0188cb
