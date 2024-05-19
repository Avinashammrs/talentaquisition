import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      type: 'bar',
      label: 'Received',
      backgroundColor: '#277ACC',
      borderColor: '#277ACC',
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
      order: 2,
    },
    {
      type: 'line',
      label: 'Processed',
      backgroundColor: '#002B55',
      borderColor: '#002B55',
      fill: false,
      data: [35, 49, 60, 71, 46, 45, 30, 40, 50, 60, 70, 80],
      order: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      type: 'category',
    },
    y: {
      type: 'linear',
    },
  },
};

const ApplicationsInfo = () => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '383px',
        borderRadius: '10px',
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Application's Info
        </Typography>
        <div style={{ height: '300px' }}>
          <Chart type="bar" data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationsInfo;
