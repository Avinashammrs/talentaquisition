import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
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
      order: 2
    },
    {
      type: 'line',
      label: 'Processed',
      backgroundColor: '#002B55',
      borderColor: '#002B55',
      fill: false,
      data: [35, 49, 60, 71, 46, 45, 30, 40, 50, 60, 70, 80],
      order: 1
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Applications Info'
    }
  },
  scales: {
    x: {
      type: 'category',
      title: {
        display: false,
        text: 'Month'
      }
    },
    y: {
      type: 'linear',
      title: {
        display: false,
        text: 'Applications'
      }
    }
  }
};

const ApplicationsInfo = () => {
  return (
    <div className="applications-info">
      <h2>Applications Info</h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ApplicationsInfo;
