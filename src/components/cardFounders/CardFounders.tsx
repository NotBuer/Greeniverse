import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardsFounders() {
  return (
      <>
      <h1 className="heading"> Fundadores <span>Greeniverse</span> </h1>
    
    <Card className='foundersCards' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          width="100"
          image="https://i.imgur.com/Uwtg03t.jpg"
          alt="Murilo"
          background-color="red"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Murilo Andrade da Gama
          </Typography>
          <Typography variant="body2" color="text.secondary">
              21 anos, Desenvolvedor .NET FullStack Jr, Formado em análise e desenvolvimento de sistemas.
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
              18 anos, Desenvolvedora .NET FullStack Jr, Persistente etc...
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
              18 anos, Desenvolvedora .NET FullStack Jr, proatividade.
          </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
      
    
    </>
  );
}
