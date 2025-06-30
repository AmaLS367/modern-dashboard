import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import ChartComponent from '../components/Chart';
import {
  CurrencyDollarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  UsersIcon
} from '@heroicons/react/outline';

function Dashboard() {
  // Demo metrics for cards
  const cards = [
    { title: 'Revenue', value: '$15,000', icon: <CurrencyDollarIcon className="h-6 w-6" />, color: 'cyan' },
    { title: 'Expenses', value: '$5,000', icon: <ChartPieIcon className="h-6 w-6" />, color: 'purple' },
    { title: 'Profit', value: '$10,000', icon: <ArrowTrendingUpIcon className="h-6 w-6" />, color: 'cyan' },
    { title: 'Active Users', value: '1,200', icon: <UsersIcon className="h-6 w-6" />, color: 'purple' }
  ];

  // Demo data for line chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 15000, 17000, 14000, 18000, 19000],
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.5)'
      }
    ]
  };
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom', labels: { color: '#fff' } }
    },
    scales: {
      x: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } },
      y: { ticks: { color: '#cbd5e1' }, grid: { color: '#334155' } }
    }
  };

  // Demo data for pie chart
  const pieData = {
    labels: ['Marketing', 'Sales', 'IT', 'Operations'],
    datasets: [
      {
        label: 'Departments',
        data: [300, 500, 200, 100],
        backgroundColor: ['#00d1ff', '#a855f7', '#38bdf8', '#facc15']
      }
    ]
  };
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#fff' } }
    }
  };

  return (
    <div>
      <Header />
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <ChartComponent type="line" data={lineData} options={lineOptions} />
        <ChartComponent type="pie" data={pieData} options={pieOptions} />
      </div>
      {/* Forecast */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Forecast</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Next Month Revenue</span>
            <span className="text-accent1">$18,000</span>
          </li>
          <li className="flex justify-between">
            <span>Server Costs</span>
            <span className="text-accent2">$2,500</span>
          </li>
          <li className="flex justify-between">
            <span>Profit Goals</span>
            <span className="text-green-400">Up</span>
          </li>
        </ul>
      </div>
      {/* Recent Transactions */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto bg-[#1e293b] bg-opacity-70 backdrop-blur-md rounded-lg">
          <table className="min-w-full table-auto text-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-800">
                <td className="border px-4 py-2">2025-06-01</td>
                <td className="border px-4 py-2">Subscription Income</td>
                <td className="border px-4 py-2">$200</td>
                <td className="border px-4 py-2">Completed</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="border px-4 py-2">2025-06-02</td>
                <td className="border px-4 py-2">Server Fees</td>
                <td className="border px-4 py-2">-$50</td>
                <td className="border px-4 py-2">Paid</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="border px-4 py-2">2025-06-03</td>
                <td className="border px-4 py-2">Sales Revenue</td>
                <td className="border px-4 py-2">$500</td>
                <td className="border px-4 py-2">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
