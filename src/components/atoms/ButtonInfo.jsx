import * as React from 'react';
import Button from '@mui/material/Button';

export const ButtonInfo = ({ children }) => {

  const ButtonSx = {
    fontSize:"0.6rem",
    borderRadius: "20px",
    textDecoration: "none",
    margin:"0.5rem 1rem 0 0",
    "&:hover":{backgroundColor: "#ff2625"}
  }
  
  return (
    <Button 
      variant="contained" 
      color="success" 
      sx={ButtonSx}
      disableElevation>
        {children}
    </Button>
  );
}