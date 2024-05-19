import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material';

const activities = [
  {
    name: 'John Doe',
    role: 'Python Developer',
    time: '19 mins ago',
    interviewer: 'Stella',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'John Doe',
    role: 'Python Developer',
    time: '19 mins ago',
    interviewer: 'Stella',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'John Doe',
    role: 'Python Developer',
    time: '19 mins ago',
    interviewer: 'Stella',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
 
];

const Activity = () => {
  return (
    <Box mb={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Activity</Typography>
        <Button variant="text">View All</Button>
      </Box>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={activity.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${activity.name} [${activity.role}]`}
              secondary={`Interview with ${activity.interviewer} - ${activity.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Activity;
