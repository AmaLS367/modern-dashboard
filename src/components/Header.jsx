import React from 'react';
import { FilterIcon } from '@heroicons/react/outline';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#1e293b] p-2 rounded-lg space-x-2">
          <FilterIcon className="h-5 w-5 text-white" />
          <span className="text-white">Last 30 days</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
