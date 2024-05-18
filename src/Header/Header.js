import React from 'react';
import './Header.css';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import MessageIcon from '@mui/icons-material/Message';
import Logo from './logo.png';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', height: '125px' }}>
      <Toolbar>
        <img src={Logo} alt="Company Logo" style={{ width: '231.8px', height: '61.64px', marginRight: '10px', marginTop: '32px', }} />

        <div style={{ position: 'relative', marginRight: '40px', marginTop: '30px', marginLeft: ' 50px' }}>

          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            endAdornment={
              <IconButton size="small" sx={{ p: '8px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            }
            style={{
              paddingLeft: '30px',
              backgroundColor: '#FFFFFF',
              width: '450px',
              height: '64px',
              color: 'black',
              padding: '8px',
              boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;