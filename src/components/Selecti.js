import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tuotteet from './Tuotteet';

export default function Selecti(props) {

  const [hinta, setHinta] = React.useState("");
  
  const handleChange = (event) => {
    setHinta(event.target.value);
    
    props.setValittupaivahinta (event.target.value);
    
  
    
  };

  
  

  return (
    <div>

      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="simple-select-autowidth-label">Valitse mökki</InputLabel>
        
               
        <Select
          labelId="simple-select-autowidth-label"
          id="simple-select-autowidth"
          value={hinta}
          onChange={handleChange}
          autoWidth
          label="Objekti"
          align='center'
        >
         {
               Tuotteet && Tuotteet.map ((tuotteet)=>(
            
          <MenuItem 
          value={tuotteet.price}
          img = {tuotteet.icon}
          key = {tuotteet.id}

          >{tuotteet.name} <br/> &euro; {tuotteet.price} / vrk</MenuItem>
                  
                
              ))} 
        </Select>
                  

      </FormControl>
    </div>
  );
}
