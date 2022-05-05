import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tuotteet from './Tuotteet';

export default function SummaaTiedot(props) {

    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={props.kohteenKuva}
          alt="valittu mökki"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align='center'>
            Varauksen summa:
          </Typography>
          <Typography variant="h6" color="text.secondary" align='center'>
            25 &euro;
          </Typography>
          <Typography gutterBottom variant="caption" component="div" align='center'>
            Valitut päivät:  {props.paivienMaara}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
