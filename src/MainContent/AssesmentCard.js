import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';

// Import the local images
import SmallAvatarImage from '../SideBar/Icons/officeGirl.png';
import LargeAvatarImage from '../SideBar/Icons/officeGirl.png';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '383px',
  backgroundColor: '#1976d2',
  color: '#fff',
  position: 'relative',
  borderRadius: '10px ',
  boxShadow: 3,
}));

const Icon = styled(AssignmentIcon)(({ theme }) => ({
  fontSize: 100,
  color: '#fff',
  position: 'absolute',
  top: theme.spacing(8),
  left: theme.spacing(2),
}));

const Text = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(22),
  marginLeft: theme.spacing(2),
  fontSize : '3.5rem'
}));

const Text1 = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginLeft: theme.spacing(2),
  fontSize : '1.5rem'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(-4),
  backgroundColor: '#fff',
  color: '#1976d2',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  float: 'right'
}));

const SmallAvatar = styled('img')({
  position: 'absolute',
  bottom: '200px',
  right: '140px',
  width: '80px',
  height: '95px',
});

const LargeAvatar = styled('img')({
  position: 'absolute',
  top: '10px',
  right: '-16px',
  width: '175px',
  height: '220px',
});

const AssessmentCard = () => {
  return (
    <StyledCard>
      <Icon />
      <CardContent>
        <Text variant="h5" component="div">
          0033
        </Text>
        <div style= {{display:"block"}}>
        <Text1 variant="body2" component="div">
          New Assessment's
        </Text1>
        <StyledButton variant="contained">
          View Details
        </StyledButton>
        </div>
      </CardContent>
      <SmallAvatar 
        src={SmallAvatarImage} 
        alt="Avatar" 
      />
      <LargeAvatar 
        src={LargeAvatarImage} 
        alt="Large Avatar" 
      />
    </StyledCard>
  );
};

export default AssessmentCard;
