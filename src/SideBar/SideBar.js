import React from 'react';
import { Drawer, List, ListItem, ListItemIcon} from '@mui/material';
import DashboardIcon from './Icons/Dashboard.png';
import FileIcon from './Icons/File.png';
import InterviewIcon from './Icons/Interview.png';
import SettingsIcon from './Icons/Settings.png';
import StatusIcon from './Icons/Status.png';
import SupportIcon from './Icons/Support.png';
import TaskIcon from './Icons/Tasks.png';
import UserProfileIcon from './Icons/UserProfile.png';
import UsersIcon from './Icons/UserProfile.png';

const Sidebar = () => {

  const menuItems = [
    { text: 'Dashboard', icon: DashboardIcon },
    { text: 'Settings', icon: SettingsIcon },
    { text: 'UserProfile', icon: UserProfileIcon },
    { text: 'Users', icon: UsersIcon },
    { text: 'File', icon: FileIcon },
    { text: 'Task', icon: TaskIcon },
    { text: 'Support', icon: SupportIcon },
    { text: 'Interview', icon: InterviewIcon },
    { text: 'Status', icon: StatusIcon }
  ];

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: 125,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { boxSizing: 'border-box',top: '190px'},
      top: '190px'
    }}
  >
    <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>
              <img src={item.icon} alt={item.text} style={{ width: '24px', height: '24px' }} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
  </Drawer>

  );
};

export default Sidebar;