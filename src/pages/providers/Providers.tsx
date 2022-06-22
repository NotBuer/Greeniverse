import { Button, Grid, Typography, TextField } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/statics/navbar/Navbar';
import { Box } from "@mui/material";
import './Providers.css';
import { ChangeEvent } from "react";
import React from "react";
import Footer from "../../components/statics/footer/Footer";
import { toast } from "react-toastify";

function Providers() {

  let navigate = useNavigate();

  function handleClick() {
    toast.success('Mensagem encaminhada com Sucesso!!', {
      theme: "colored"
    })
    navigate('/Home');
  }

  return (
    <>
      <Navbar />
      <main className='provider-body'>
        <section className='provider-section'>
          <h1 className='provider-title'>Enviar uma <span>solicitação</span></h1>
          <form action="https://formsubmit.co/greeniverse.project@gmail.com" method="POST">
            <input type="email" name="email" placeholder="email" required />
            <input type="text" name="cnpj" placeholder="cnpj" required />
            <input type="text" name="assunto" placeholder="assunto" required />
            <input type="text" name="descricao" placeholder="descricao" required />
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="http://localhost:3000/Home"></input>
            <p className='provider-p'>
              Assim que for possível um Fundador(a) da Greeniverse responderá a sua solicitação.</p>
            <p className='provider-p2'>Desde já agradecemos.
            </p>
            <button type="submit">Send</button>
          </form>
        </section>

      </main>
    </>
  )
}
export default Providers;


