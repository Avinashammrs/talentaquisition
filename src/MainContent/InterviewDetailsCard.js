import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const upcomingInterviews = [
  {
    date: '07 Feb',
    title: 'Interview with Designer',
    creator: 'Stella',
    time: '10.00 AM',
  },
  {
    date: '07 Feb',
    title: 'Interview with PMO',
    creator: 'Stephan',
    time: '10.00 AM',
  },
  {
    date: '07 Feb',
    title: 'Interview with Net. Admin',
    creator: 'Stella',
    time: '10.00 AM',
  },
];

const UpcomingInterviews = () => {
  return (
    <Box mb={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Upcomings</Typography>
        <Button variant="text">View All</Button>
      </Box>
      <List>
        {upcomingInterviews.map((interview, index) => (
          <ListItem key={index}>
            <Box mr={2}>
              <Typography variant="body2">{interview.date}</Typography>
            </Box>
            <ListItemText
              primary={interview.title}
              secondary={`Created by ${interview.creator} - ${interview.time}`}
            />
            <Button variant="contained">Details</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UpcomingInterviews;
