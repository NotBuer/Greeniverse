import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Navbar from '../../components/statics/navbar/Navbar';
import { Box } from "@mui/material";
import './Providers.css'
import { ChangeEvent } from "react";

function Providers() {
  return (
    <>
<<<<<<< HEAD
    <Navbar />
    <Grid direction='column' justifyContent='flex-start' alignItems='center'></Grid>
     <Box>
     <form >
     
        <Typography variant='h4' gutterBottom component='h4' align='center' className='text3'> Enviar uma solicitação </Typography>
=======
      <Grid direction='column' justifyContent='flex-start' alignItems='flex-end'>
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
>>>>>>> db12b4bcf0c8074097015ad2f13b0900019be243

              <Typography variant='h6' gutterBottom component='h6' align='center' className='text4'> Insira os detalhes de sua solicitação. Um membro de nossa equipe responderá assim que for possível. </Typography>

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

