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
  const data = {
    labels: props.years, // X-axis labels
    datasets: [
      {
        label: '',
        data: props.applications, // Y-axis data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',
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
        text: 'Monthly Sales Data', // Title of the chart
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
