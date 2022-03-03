import React from 'react';
import Dialog from '@mui/material/Dialog';
import Login from './Login';

const ModalDialog1 = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Login handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog1;