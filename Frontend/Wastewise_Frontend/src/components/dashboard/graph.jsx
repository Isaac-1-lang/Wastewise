import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import RwandaMap1 from './ChatPanel';
ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const GarbageChart = () => {
  const regions = ['Musanze', 'Ruhango', 'Kibaya', 'Muhundwe', 'Bugesera'];
  const cleanlinessPercent = [75, 60, 80, 65, 50]; // Bar chart data
  const garbageTons = [500, 800, 650, 720, 300];   // Line chart data

  const companyNames = ['GreenCo', 'CleanWave', 'EcoRwanda', 'TrashAway', 'Recyclers Ltd'];
  const companyContribution = [30, 25, 20, 15, 10]; // Pie chart data

  const sorted = regions
    .map((region, i) => ({ region, value: garbageTons[i] }))
    .sort((a, b) => b.value - a.value);

  const barData = {
    labels: regions,
    datasets: [
      {
        label: 'Cleanliness (%)',
        data: cleanlinessPercent,
        backgroundColor: 'rgba(46, 204, 113, 0.6)',
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: sorted.map(item => item.region),
    datasets: [
      {
        label: 'Garbage (tons)',
        data: sorted.map(item => item.value),
        backgroundColor: 'rgba(0, 128, 255, 0.6)',
        borderColor: 'rgba(0, 128, 255, 1)',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const pieData = {
    labels: companyNames,
    datasets: [
      {
        label: 'Contribution (%)',
        data: companyContribution,
        backgroundColor: [
          '#1abc9c',
          '#3498db',
          '#9b59b6',
          '#f1c40f',
          '#e67e22',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Percentage / Tons' },
      },
      x: {
        title: { display: true, text: 'Region' },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: {
        display: true,
        text: 'Company Contributions to Cleanliness Effort',
      },
    },
  };

  return (
    
    <div className="p-6 bg-white rounded-xl shadow-md space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Bar Chart */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Bar Chart - Cleanliness by Region</h2>
          <Bar
            data={barData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { display: true, text: 'Cleanliness Percentage by Region' },
              },
              scales: {
                ...chartOptions.scales,
                y: { ...chartOptions.scales.y, max: 100 },
              },
            }}
          />
        </div>

        {/* Line Chart */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Line Chart - Garbage Collected</h2>
          <Line
            data={lineData}
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: { display: true, text: 'Garbage Collected (Tons) by Region' },
              },
              scales: {
                ...chartOptions.scales,
                y: {
                  beginAtZero: true,
                  title: { display: true, text: 'Tons' },
                },
              },
            }}
          />
        </div>
      </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

  <div className="bg-white rounded-xl shadow-md p-4 h-[690px]">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Pie Chart - Company Contributions</h2>
    <Pie data={pieData} options={pieOptions} />
  </div>


  <div className="bg-white rounded-xl shadow-md p-4 ">
    <h2 className="text-xl font-semibold mb-4 text-gray-700">Region Map</h2>
    <span className='h-[600px] w-full overflow-y-hidden '><RwandaMap1/></span> 
  </div>
</div>
</div>
  );
}
export default GarbageChart;
