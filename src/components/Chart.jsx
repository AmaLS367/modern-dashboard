import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

// Регистрация необходимых компонентов Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function ChartComponent({ type, data, options }) {
  return (
    <div className="p-4 bg-[#1e293b] bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg">
      {type === 'line' ? (
        <Line data={data} options={options} />
      ) : (
        <Doughnut data={data} options={options} />
      )}
    </div>
  );
}

export default ChartComponent;
