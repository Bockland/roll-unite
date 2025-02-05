import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NavBarApp = () => {

  const navegate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'rgb(81, 53, 97)', borderRadius: '8px'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, backgroundColor: 'rgb(60, 36, 74)' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Roll Unite v0.3
          </Typography>
          <Button 
            color="inherit"
            onClick={() => { navegate("/") }}
          >Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
