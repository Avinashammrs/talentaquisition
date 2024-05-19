import React from 'react';
import './Header.css';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import MessageIcon from '@mui/icons-material/Message';
import Logo from './logo.png';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', height: 'auto' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={3}>
            <img src={Logo} alt="Company Logo" style={{ width: '100%', height: 'auto', maxWidth: '231.8px', maxHeight: '61.64px', }} />
          </Grid>

          <Grid item xs={12} sm={3} style={{ paddingLeft: '20px', paddingRight: '20px', marginBottom: '10px' }}>
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={
                <IconButton size="small" sx={{ p: '8px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              }
              fullWidth
              style={{
                backgroundColor: '#FFFFFF',
                height: '50px',
                color: 'black',
                padding: '8px',
                boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
              <IconButton aria-label="day-mode" color="#091316"  style={{ opacity: 0.75 }}>
                <LightModeIcon />
              </IconButton>
              <IconButton aria-label="show 4 new notifications" color="#091316"  style={{ opacity: 0.75 }}> 
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="day-mode" color="#091316"  style={{ opacity: 0.75 }}>
                <MessageIcon />
              </IconButton>

              <IconButton aria-label="settings" color="#091316"  style={{ opacity: 0.75 }}>
                <SettingsIcon />
              </IconButton>

              <IconButton aria-label="account of current user" color="#091316"  style={{ opacity: 0.75 }}>
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
