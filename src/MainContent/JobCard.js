// JobCard.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
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
