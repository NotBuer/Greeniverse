import './Providers.css'
import  React  from "react";


function Providers() {
  return (
    <>
<<<<<<< HEAD
    <main className='provider-body'>
      <section className='provider-section'> 
        <h1 className='provider-title'>Enviar uma solicitação</h1>
        <form className='provider-form'>
       <input type="email" name="E-mail" className='provider-input' autoComplete="off" placeholder="E-mail"/>
=======
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
>>>>>>> f874f6f39ea9ad68164f29957388c954f3bf2a44

       <input type="cnpj" name="cnpj" className='provider-input'  autoComplete="off" placeholder="CNPJ"/>

       <input type="assunto" name="assunto"className='provider-input'  autoComplete="off" placeholder="Assunto"/>

       <input type="descrição" name="descrição" className='provider-input2'autoComplete="off" placeholder="Descrição"/>
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


