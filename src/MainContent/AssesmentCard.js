// AssessmentCard.js
import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AssessmentIcon from '@mui/icons-material/Assessment';

const StyledCard = styled(Card)(({ theme }) => ({
    minWidth: 275,
    backgroundColor: '#1976d2',
    color: '#fff',
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  }));
  
  const Icon = styled(AssessmentIcon)(({ theme }) => ({
    fontSize: 48,
    color: '#fff',
  }));
  
  const Text = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));
  
  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: '#fff',
    color: '#1976d2',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  }));
  
  const SmallAvatar = styled('img')({
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    width: '40px',
    height: '40px',
  });
  
  const LargeAvatar = styled('img')({
    position: 'absolute',
    top: '-16px',
    right: '-16px',
    width: '80px',
    height: '80px',
  });

const AssessmentCard = () => {

  return (
    <StyledCard>
      <Icon />
      <Text variant="h5" component="div">
        0033
      </Text>
      <Text variant="body2" component="div">
        New Assessment's
      </Text>
      <StyledButton variant="contained">
        View Details
      </StyledButton>
      <SmallAvatar 
        src="https://img.icons8.com/clouds/2x/businesswoman.png" 
        alt="Avatar" 
      />
      <LargeAvatar 
        src="https://img.icons8.com/clouds/2x/businesswoman.png" 
        alt="Large Avatar" 
      />
    </StyledCard>
  );
};

export default AssessmentCard;
