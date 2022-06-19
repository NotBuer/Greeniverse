import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CardsFounders() {
  return (
    <>
      <div><h1 className="heading"> Fundadores <span>Greeniverse</span> </h1></div>


      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            width="100"
            image="https://i.imgur.com/Uwtg03t.jpg"
            alt="Murilo"

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Murilo Andrade da Gama
            </Typography>
            <Typography variant="body2" color="text.secondary">
              21 anos, Desenvolvedor .NET FullStack Jr, Formado em análise e desenvolvimento de sistemas.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/CcaG6Qs.png"
            alt="Matheus Catel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Matheus Alexandre Catel de Barros Soares
            </Typography>
            <Typography variant="body2" color="text.secondary">
              25 anos, Desenvolvedor .NET FullStack Jr, Formado em publicidade e propaganda.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/BfKM67O.png"
            alt="Kauane Farias"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kauane Farias
            </Typography>
            <Typography variant="body2" color="text.secondary">
              18 anos, Desenvolvedora .NET FullStack Jr, com preferência em backend, persistente e orientada a detalhes
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/eNv3z84.png"
            alt="Rodrigo da Silva França"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rodrigo da Silva França
            </Typography>
            <Typography variant="body2" color="text.secondary">
              23 anos, Desenvolvedor .NET FullStack Jr, com experiência na área.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/d3ltCqC.png"
            alt="Rodrigo da Silva França"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Thamyres Vitoria da Silva Cavalcanti
            </Typography>
            <Typography variant="body2" color="text.secondary">
              18 anos, Desenvolvedora .NET FullStack Jr, persistente e bom trabalho em equipe.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/N201MWg.png"
            alt="Uriel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Uriel Pereira Alves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              30 anos, Desenvolvedor .NET FullStack Jr, estudando análise e desenvolvimento de sistemas.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className='foundersCards' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://i.imgur.com/whxdHdF.png"
            alt="Uriel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gabriela Maria Dantas Peres
            </Typography>
            <Typography variant="body2" color="text.secondary">
              23 anos, Desenvolvedora .NET FullStack Jr, criativa e persistente.
              <a href=''><LinkedInIcon /></a>
              <a href=''><GitHubIcon /></a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
}


