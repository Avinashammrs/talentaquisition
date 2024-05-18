import React from 'react';
import { Box } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCard = () => {
  return (
    <Box mb={3}>
      <Calendar />
    </Box>
  );
};

export default CalendarCard;
