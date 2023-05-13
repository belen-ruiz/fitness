import * as React from 'react';
import Button from '@mui/material/Button';

export const ButtonInfo = ({ children }) => {
  return (
    <div className='btn-banner flex-center'>
        {children}
    </div>
  );
}