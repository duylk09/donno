import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  // Data for the chart
  console.log(props)
  const data = {
    labels: props.years, // X-axis labels
    datasets: [
      {
        label: 'Applications for Entry Clearance Visas',
        data: props.applications, // Y-axis data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Grants of Entry Clearance Visas', // Label for grants dataset
        data: props.grants, // Y-axis data for grants
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Bar color for grants
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend (top, bottom, etc.)
      },
      title: {
        display: true,
        text: 'Entry clearance visas: Applications and Grants', // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
