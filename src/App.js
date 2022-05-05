import './App.css';

import Tuotteet from './components/Tuotteet';
import Selecti from './components/Selecti';
import PaivaSlider from './components/PaivaSlider';
import Loppusiivous from './components/Loppusiivous';
import SummaaTiedot from './components/SummaaTiedot';
import {Container,Typography,} from '@material-ui/core';
import { Stack } from '@mui/material';
import Kuvat from './components/Kuvat';
import { useState } from 'react';

function App() {

  const [loppuSiivousValittu, setLoppusiivousValittu] = useState(true);
  const [paivienMaara, setPaivienmaara] = useState (7);
  const [valittuPaivahinta, setValittupaivahinta] = useState (0);
  const [kokonaisSumma, setkokonaisSumma] = useState (0);

  const [kohteenKuva, setkohteenKuva]=useState();

  const laskeSumma = (valittuPaivahinta,paivienMaara,loppuSiivousValittu) =>{

    {(loppuSiivousValittu===true)
    ?
      setkokonaisSumma (paivienMaara*valittuPaivahinta+100)
      
    :
      setkokonaisSumma (paivienMaara*valittuPaivahinta)
      
    }
    
    
  }
  console.log(kokonaisSumma)
  
  
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

            <Loppusiivous setLoppusiivousValittu={setLoppusiivousValittu}/>

            <SummaaTiedot paivienMaara={paivienMaara} />

            </Stack>
        </Container>
    </div>
  );
}

export default App;
