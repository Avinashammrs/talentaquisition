import React, { useState } from 'react';
import ApplicationsInfo from './ApplicationsInfo';
import AssessmentCard from './AssesmentCard';
import InterviewCard from './InterviewCard';
import JobCard from './JobCard';
import Gridcard from './GridCard';
import CalendarCard from './CalenderCard';
import UpcomingInterviews from './InterviewDetailsCard';
import Activity from './ActivityCard';
import HiringCandidates from './HiringCard';
import { Container, Grid, Box, Typography, Select, MenuItem, FormControl, InputLabel, Button, Divider, Card, CardContent, InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PythonAvatarImage from '../SideBar/Icons/python.png';
import JavaAvatarImage from '../SideBar/Icons/Java.png';
import AngularAvatarImage from '../SideBar/Icons/Angular.png';
import UIAvatarImage from '../SideBar/Icons/UI.png';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#ffff',
  borderRadius: '10px ',
  boxShadow: 3,
}));

const jobs = [
  {
    title: 'Python Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago',
    icon: PythonAvatarImage
  },
  {
    title: 'Angular Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago',
    icon: AngularAvatarImage
  },
  {
    title: 'Java Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago',
    icon: JavaAvatarImage
  },
  {
    title: 'UX/UI Designers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago',
    icon: UIAvatarImage
  }
];

const candidates = [
  {
    name: 'John Smith',
    role: 'Senior Python Developer',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: '19th Feb 2024',
    time: '10.30 A.M',
    levels: [
      { name: '1st Level', score: '7/10', interviewer: 'Stella' },
      { name: '2nd Level', score: '6/10', interviewer: 'Smith' },
      { name: '3rd Level', score: 'Waiting', interviewer: 'Stephan' },
    ],
    meetVia: 'G-Meet',
    attendees: 'Johnson',
  },
  {
    name: 'Maria',
    role: 'Senior Python Developer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    date: '19th Feb 2024',
    time: '10.30 A.M',
    levels: [
      { name: '1st Level', score: '7/10', interviewer: 'Stella' },
      { name: '2nd Level', score: '6/10', interviewer: 'Smith' },
      { name: '3rd Level', score: 'Waiting', interviewer: 'Stephan' },
    ],
    meetVia: 'G-Meet',
    attendees: 'Johnson',
  },
  {
    name: 'Priya',
    role: 'Senior Python Developer',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    date: '19th Feb 2024',
    time: '10.30 A.M',
    levels: [
      { name: '1st Level', score: '7/10', interviewer: 'Stella' },
      { name: '2nd Level', score: '6/10', interviewer: 'Smith' },
      { name: '3rd Level', score: 'Waiting', interviewer: 'Stephan' },
    ],
    meetVia: 'G-Meet',
    attendees: 'Johnson',
  },
  // Add more candidates here as needed
];

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? job.title === filter : true)
    );
  });

  return (
    <>
      <>
        <Box p={3}>
          <Grid container spacing={2} alignItems="center" justify="space-between">
            <Grid item xs={12} sm={10}>
              <Typography variant="h4">HR Employee</Typography>
              <Typography variant="subtitle1">Enjoy your selecting potential candidates Tracking and Management System.</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="primary" style={{ float: "right" }}>Taskdetails</Button>
            </Grid>
          </Grid>
        </Box>

        <Box p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <ApplicationsInfo />
            </Grid>
            <Grid item xs={12} md={5}>
              <AssessmentCard />
            </Grid>
          </Grid>
        </Box>

        <Box p={3}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <StyledCard>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Today Interviews Meetings Info
                      </Typography>
                      <Divider />
                      <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: 0 }}>
                        {candidates.map((candidate, index) => (
                          <Box key={index} sx={{ display: 'inline-block', marginRight: 2, verticalAlign: 'top' }}>
                            <InterviewCard candidate={candidate} />
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              </Grid>
              <Box sx={{ paddingTop: '16px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StyledCard>
                      <CardContent>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={6}>
                            <Typography variant="h5" gutterBottom>
                              Posted Jobs
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <InputBase
                              placeholder="Search"
                              inputProps={{ 'aria-label': 'search' }}
                              endAdornment={
                                <IconButton size="small" sx={{ p: '8px' }} aria-label="search">
                                  <SearchIcon />
                                </IconButton>
                              }
                              fullWidth
                              style={{
                                backgroundColor: '#FFFFFF',
                                height: '45px',
                                color: 'black',
                                padding: '8px',
                                boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
                              }}
                              onChange={handleSearchChange}
                              value={searchTerm}
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel>Filter</InputLabel>
                              <Select
                                value={filter}
                                onChange={handleFilterChange}
                                label="Filter"
                                style={{ height: "45px" }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value="Python Developers">Python Developers</MenuItem>
                                <MenuItem value="Angular Developers">Angular Developers</MenuItem>
                                <MenuItem value="Java Developers">Java Developers</MenuItem>
                                <MenuItem value="UX/UI Designers">UX/UI Designers</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Box display="flex" justifyContent="normal" alignItems="center">
                            <Typography variant="h6" sx={{ mr: 2 }}>
                              Active Jobs
                            </Typography>
                            <Typography variant="h6">
                              Pending Jobs
                            </Typography>
                          </Box>
                        </Grid>
                        <Divider />
                        <Grid container spacing={2}>
                          {filteredJobs.map((job, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                              <JobCard job={job} />
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ paddingTop: '16px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>

                    <StyledCard>
                      <CardContent>

                        <Gridcard />

                      </CardContent>
                    </StyledCard>

                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Container style={{ padding: '16px 24px' }}>
                <Box display="flex" flexDirection="column" alignItems="normal">
                  <CalendarCard />
                  <UpcomingInterviews />
                  <Activity />
                  <HiringCandidates />
                </Box>
              </Container>
            </Grid>
            </Grid>

        </Box >
      </>





    </>
  );
}

export default MainContent;
