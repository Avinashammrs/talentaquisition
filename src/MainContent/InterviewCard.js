import React from 'react';
import { Card, Typography, Avatar, Button, Table, TableBody, TableCell, TableContainer, TableRow, Box, Grid } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  border: '1px solid #ddd',
 
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: theme.spacing(0),
  border: '1px solid #ddd',
  padding: theme.spacing(1),
  minHeight: 250
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  //width: '100%',
  marginTop: theme.spacing(0),
}));

const InterviewCard = ({ candidate }) => {
  const { name, role, avatar, date, time, levels, meetVia, attendees } = candidate;

  return (
    <StyledCard>
      <Header>
        <Avatar src={avatar} sx={{ width: 80, height: 80, marginBottom: 2 }} />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{role}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <CalendarTodayIcon />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <AccessTimeIcon />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {time}
          </Typography>
        </Box>
      </Header>
      <Box sx={{ flex: 1 ,borderTop: '1px solid #ddd',borderRight: '1px solid #ddd'}}>
        <div style={{minHeight:266}}>
        <TableContainer>
          <Table >
            <TableBody>
              {levels.map((level, index) => (
                <TableRow key={index}>
                  <TableCell className="center-align">  {`${level.name} : ${level.score}`}</TableCell>
                
                  <TableCell className="center-align"> Interviewer: {level.interviewer}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell style={{padding:35}}><Button variant="outlined">Reschedule Meeting</Button></TableCell>
                <TableCell><Button variant="contained" color="primary">Join Meeting</Button> </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </Box>
    </StyledCard>
  );
};

export default InterviewCard;
