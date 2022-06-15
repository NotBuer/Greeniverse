import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Navbar from '../../components/statics/navbar/Navbar';
import { Box } from "@mui/material";
import './Providers.css';
import { ChangeEvent } from "react";
import './Providers.css'
import React from "react";

function Providers() {
  return (
    <>
      <Navbar />
      <main className='provider-body'>
        <section className='provider-section'>
          <h1 className='provider-title'>Enviar uma solicitação</h1>
          <form className='provider-form'>
            <input type="email" name="E-mail" className='provider-input' autoComplete="off" placeholder="E-mail" />
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


