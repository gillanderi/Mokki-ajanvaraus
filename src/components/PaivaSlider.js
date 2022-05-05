
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function SliderSizes(props) {

    

  const handleChange = (event) => {
   
    props.setPaivienmaara (event.target.value);
  };
  return (
    <Box width={300}>
      <Typography 
        variant='h6'
        align='center'
        style={{
          margin : "0.5em"
        }}
        >Valitse päivien lukumäärä:</Typography>
      <Slider defaultValue={7} aria-label="Default" valueLabelDisplay="auto" max={14}
       onChange={handleChange}
      />
    </Box>
  );
}