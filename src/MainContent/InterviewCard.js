// InterviewCard.js
import React from 'react';
import { Card, Typography, Avatar, Button, Table, TableBody, TableCell, TableContainer, TableRow, Grid, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const InterviewDetails = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ActionButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const InterviewCard = ({ candidate }) => {
  const { name, role, avatar, date, time, levels, meetVia, attendees } = candidate;

  return (
    <StyledCard>
      <Header>
        <Avatar src={avatar} sx={{ width: 60, height: 60, marginRight: 2 }} />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{role}</Typography>
        </Box>
      </Header>
      <InterviewDetails>
        <Table size="small">
          <TableBody>
            {levels.map((level, index) => (
              <TableRow key={index}>
                <TableCell>{level.name}:</TableCell>
                <TableCell>{level.score}</TableCell>
                <TableCell>{level.interviewer}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Meet Via:</TableCell>
              <TableCell colSpan={2}>{meetVia}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Attendees:</TableCell>
              <TableCell colSpan={2}>{attendees}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </InterviewDetails>
      <Grid container>
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
          <CalendarTodayIcon />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {date}
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {time}
          </Typography>
        </Grid>
      </Grid>
      <ActionButtons>
        <Button variant="outlined">Reschedule Meeting</Button>
        <Button variant="contained" color="primary">Join Meeting</Button>
      </ActionButtons>
    </StyledCard>
  );
};

export default InterviewCard;
