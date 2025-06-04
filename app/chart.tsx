// components/DoughnutChart.tsx
'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {useTheme} from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 60%)`;
};

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

export const DoughnutChart = ({ data }: { data: { country: string; amount: number }[] }) => {
  const theme = useTheme();

  const colors = data.map((item) => stringToColor(item.country));

  const chartData = {
    labels: data.map((item) => item.country),
    datasets: [
      {
        label: 'Amount ($)',
        data: data.map((item) => item.amount),
        backgroundColor:colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '60%', // makes it a doughnut
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: theme.palette.text.primary,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};