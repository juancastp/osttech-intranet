import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Widget 1</div>
        <div className="bg-white p-4 shadow rounded">Widget 2</div>
        <div className="bg-white p-4 shadow rounded">Widget 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
