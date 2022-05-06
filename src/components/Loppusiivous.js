import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Typography } from '@mui/material';

export default function ControlledCheckbox(props) {

  

 

  const handleChange = (event) => {
    
    props.setLoppusiivousValittu (event.target.checked);
  };

  return (
    <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
      <Typography
      variant='body2'
      >Sisällytä loppusiivous &euro; 100</Typography>
    <Checkbox
      checked={props.loppuSiivousValittu}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    
    </Stack>
  );
}
