import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tuotteet from './Tuotteet';

export default function SummaaTiedot(props) {

  const [kuva,setKuva] = React.useState (Tuotteet.find((tuote) => tuote.price===props.valittuPaivahinta));
    console.log (props.valittuPaivahinta)
    console.log (Tuotteet.find((tuote) => Number(tuote.price)===Number(props.valittuPaivahinta)));
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image=
          {(props.valittuPaivahinta!==0)?
            Tuotteet.find((tuote) => Number(tuote.price)===Number(props.valittuPaivahinta)).icon
            :
            null  
          } 
          alt="valittu mökki"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align='center'>
            Varauksen summa:
            
          </Typography>
          <Typography variant="h6" color="text.secondary" align='center'>
            {props.kokonaisSumma} &euro;
          </Typography>
          <Typography gutterBottom variant="caption" component="div" align='center'>
            Valitut päivät:  {props.paivienMaara}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
