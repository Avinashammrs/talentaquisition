import React, { useState } from 'react';
import ApplicationsInfo from './ApplicationsInfo';
import AssessmentCard from './AssesmentCard';
import InterviewCard from './InterviewCard';
import JobCard from './JobCard';
import Gridcard from './GridCard';
import CalendarCard from './CalenderCard';
import UpcomingInterviews from './InterviewDetailsCard';
import Activity from './ActivityCard';
import  HiringCandidates from './HiringCard';
import { Container, Grid, Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const jobs = [
  {
    title: 'Python Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago'
  },
  {
    title: 'Angular Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago'
  },
  {
    title: 'Java Developers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago'
  },
  {
    title: 'UX/UI Designers',
    position: 'Senior Developers',
    applicants: 258,
    change: 28,
    updated: '6 mins ago'
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
    name: 'Maria',
    role: 'Senior Python Developer',
    avatar: 'https://randomuser.me/api/portraits/women/66.jpg',
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">HR Employee</Typography>
          <Typography variant="subtitle1">Enjoy your selecting potential candidates Tracking and Management System.</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ApplicationsInfo />
        </Grid>
        <Grid item xs={6}>
          <AssessmentCard />
        </Grid>
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Container>
                <Typography variant="h4" gutterBottom>
                  Today Interviews Meetings Info
                </Typography>
                <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: 2 }}>
                  {candidates.map((candidate, index) => (
                    <Box key={index} sx={{ display: 'inline-block', marginRight: 2, verticalAlign: 'top' }}>
                      <InterviewCard candidate={candidate} />
                    </Box>
                  ))}
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box p={3}>
                <Typography variant="h4" gutterBottom>
                  Posted Jobs
                </Typography>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h6">Active Jobs</Typography>
                  <Typography variant="h6">Pending Jobs</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={3}>
                  <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <FormControl variant="outlined" style={{ minWidth: 200 }}>
                    <InputLabel>Filter</InputLabel>
                    <Select value={filter} onChange={handleFilterChange} label="Filter">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Python Developers">Python Developers</MenuItem>
                      <MenuItem value="Angular Developers">Angular Developers</MenuItem>
                      <MenuItem value="Java Developers">Java Developers</MenuItem>
                      <MenuItem value="UX/UI Designers">UX/UI Designers</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Grid container spacing={3}>
                  {filteredJobs.map((job, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <JobCard job={job} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Gridcard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CalendarCard />
              <UpcomingInterviews />
              <Activity />
              <HiringCandidates />
            </Box>
          </Container>
        </Grid>
      </Grid>




    </>
  );
}

export default MainContent;
