import './App.css';
import Selecti from './components/Selecti';
import PaivaSlider from './components/PaivaSlider';
import Loppusiivous from './components/Loppusiivous';
import SummaaTiedot from './components/SummaaTiedot';
import {Container,Typography,} from '@material-ui/core';
import { Stack } from '@mui/material';
import Kuvat from './components/Kuvat';
import { useEffect, useState } from 'react';

function App() {

  const [loppuSiivousValittu, setLoppusiivousValittu] = useState(true);
  const [paivienMaara, setPaivienmaara] = useState (7);
  const [valittuPaivahinta, setValittupaivahinta] = useState (0);
  const [kokonaisSumma, setkokonaisSumma] = useState (0);

  

  useEffect (()=>{
    laskeSumma();
    
  },[loppuSiivousValittu,paivienMaara,valittuPaivahinta])

  const laskeSumma = () =>{

    {(loppuSiivousValittu===true)
    ?
      setkokonaisSumma (paivienMaara*valittuPaivahinta+100)
      
    :
      setkokonaisSumma (paivienMaara*valittuPaivahinta)
      
    }
    
    
  }
    
  
    
  return (
    <div >
      
      <Container maxWidth='md'>
      <Typography 
        variant='h4'
        align='center'
        style={{
          margin : "1em"
        }}
        >Lomamökit.fi</Typography>

        <Kuvat/>
        <Stack 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}>

            <Selecti laskeSumma={laskeSumma}
            setValittupaivahinta={setValittupaivahinta}
            valittuPaivahinta={valittuPaivahinta}
            paivienMaara={paivienMaara}
            loppuSiivousValittu={loppuSiivousValittu}
            />

            <PaivaSlider setPaivienmaara={setPaivienmaara}/>

            <Loppusiivous setLoppusiivousValittu={setLoppusiivousValittu} loppuSiivousValittu={loppuSiivousValittu}/>

            <SummaaTiedot kokonaisSumma={kokonaisSumma} paivienMaara={paivienMaara} valittuPaivahinta={valittuPaivahinta} />

            </Stack>
        </Container>
    </div>
  );
}

export default App;
