import React from 'react';
import { HomeIcon, ChartBarIcon, ChartPieIcon, CogIcon } from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div className="w-64 h-screen p-6 bg-[#1e293b] text-white flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Finance Dash</h2>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 hover:text-accent1">
              <HomeIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 hover:text-accent1">
              <ChartBarIcon className="h-5 w-5" />
              <span>Analytics</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 hover:text-accent1">
              <ChartPieIcon className="h-5 w-5" />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-accent1">
              <CogIcon className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-6">
        {/* Можно добавить ссылку выхода или другие элементы */}
      </div>
    </div>
  );
}

export default Sidebar;

