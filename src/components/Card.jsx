import React from 'react';

function Card({ title, value, icon, color }) {
  let bgColorClass = 'bg-gray-500/30';
  if (color === 'cyan') bgColorClass = 'bg-accent1/30';
  if (color === 'purple') bgColorClass = 'bg-accent2/30';

  return (
    <div className="flex items-center p-4 bg-[#1e293b] bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-white">
      {icon && (
        <div className={`p-3 rounded-full ${bgColorClass}`}>
          {icon}
        </div>
      )}
      <div className="ml-4">
        <h3 className="text-lg">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default Card;
