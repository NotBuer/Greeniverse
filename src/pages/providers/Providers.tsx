import { Button,Grid,Typography,TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";


function providers(){
  return(
    <>
    <Grid direction='column' justifyContent='flex-start' alignItems='center'></Grid>
     <Box>
     <form >
     
        <Typography variant='h4' gutterBottom component='h4' align='center' className='text3'> Enviar uma solicitação </Typography>

          <TextField id='none' label='E-mail' variant='filled' name='email' margin='normal' fullWidth />
          <TextField id='none' label='CNPJ' variant='filled'name='CNPJ' margin='normal' fullWidth />
          <TextField  id='none' label='Assunto' variant='filled' name='about' margin='normal' fullWidth />
          <TextField id='none' label='descrição' variant='filled'  name='descrption' margin='normal' fullWidth />

          <Typography variant='h6' gutterBottom component='h6' align='center' className='text4'> Insira os detalhes de sua solicitação. Um membro de nossa equipe responderá assim que for possível. Ass:Equipe Greeniverse </Typography>

          <Box marginTop={4} textAlign='center'>
            <Button  type='submit' variant='contained' className='btn'>              
              Enviar        
            </Button> 
            <Box marginY={2} textAlign='center' className='button1'></Box>        
                                                          
         <Link to='/home' className='text-decorator-none'></Link>  
      </Box>
    </form>
         </Box>
      
    </>
  );
}
export default providers;