import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from '@mui/material';

const candidates = [
  {
    name: 'John Doe',
    role: 'Senior Python Developer',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    status: 'Hired',
  },
  // Add more candidates as needed
];

const HiringCandidates = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Hiring Candidates</Typography>
        <Button variant="text">View All</Button>
      </Box>
      <List>
        {candidates.map((candidate, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={candidate.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={candidate.name}
              secondary={candidate.role}
            />
            <Button variant="contained">Details</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HiringCandidates;
