import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: theme.spacing(2)
}));

const JobCard = ({ job }) => {
  return (
    <Card style={{ margin: '8px' }}> 
      <CardContent> 
        <Avatar src={job.icon} alt={job.title} />
        <Typography variant="h6" component="div">
          {job.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {job.position}
        </Typography>
        <Typography variant="h4" component="div">
          {job.applicants}
        </Typography>
        <Typography color="textSecondary">
          Total Applicants
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="primary">
            {job.change}% vs Last month
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {job.updated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
