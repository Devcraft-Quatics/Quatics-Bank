import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModalDialog from './ModalDialog';
import ModalDialog1 from './ModalDialog1';
const App = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  }}>
            <b>QUATICS BANK</b>
          </Typography>
          <Button color="inherit" onClick={handleOpen} >GET STARTED</Button>
          <ModalDialog open={open} handleClose={handleClose} />
          <Button color="inherit" onClick={handleOpen}>LOGIN</Button>
          <ModalDialog1 open={open1} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default App;