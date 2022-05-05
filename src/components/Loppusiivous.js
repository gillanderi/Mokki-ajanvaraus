import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Typography } from '@mui/material';

export default function ControlledCheckbox(props) {

  const [checked, setChecked] = React.useState(true);

 

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    
    </Stack>
  );
}
