import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tuotteet from './Tuotteet';

export default function SummaaTiedot(props) {

  const [nimi, setNimi] =useState ();
  const [saapumispaiva, setSaapumispaiva] = useState ();

  const [open, setOpen] = React.useState(false);

  const lisaaNimi = (nimi) => {

      setNimi(nimi);
  }
  const lisaaPaiva = (paiva) => {

    setSaapumispaiva(paiva);
}

  const handleClickOpen = () => {
    lisaaNimi(nimi);
    lisaaPaiva(saapumispaiva);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin: "1em",
    marginBottom : "1em",
}}>
      <div>
        <CardMedia
          component="img"
          height="130"
          image=
          {(props.valittuPaivahinta!==0)?
            Tuotteet.find((tuote) => Number(tuote.price)===Number(props.valittuPaivahinta)).icon
            :
            null  
          } 
          alt=""
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

          <Box
          
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Varaajan nimi"
          defaultValue=""
          
          onChange={ (e) => { setNimi (e.target.value);}}
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Saapumispäivä"
          defaultValue=""
          placeholder='01.01.2022'
          onChange={ (e) => { setSaapumispaiva (e.target.value);}}
        />
        </div>
        <div style={{display:"flex", justifyContent:"center",}}>

        <Button variant="contained" onClick={handleClickOpen}>Varaa</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Varauksen yhteenveto"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Loppusumma:
            <br/>
            {props.kokonaisSumma} &euro;
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Saapumispäivämäärä:
            <br/>
            {saapumispaiva}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Varaaja:
            <br/>
            {nimi}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Peruuta</Button>
          <Button onClick={handleClose} autoFocus>
            Tee varaus
          </Button>
        </DialogActions>
      </Dialog>
        </div>
        </Box>
        
        </CardContent>
      </div>
    </Card>
  );
}
