import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({
    totalUsers: 0,
    totalClients: 0,
    totalOrders: 0,
    totalTimeEntries: 0,
  });

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [usersRes, clientsRes, ordersRes, timeEntriesRes] = await Promise.all([
          axiosInstance.get('/users'),
          axiosInstance.get('/clients'),
          axiosInstance.get('/orders'),
          axiosInstance.get('/time-entries'),
        ]);
        setSummaryData({
          totalUsers: usersRes.data.length,
          totalClients: clientsRes.data.length,
          totalOrders: ordersRes.data.length,
          totalTimeEntries: timeEntriesRes.data.length,
        });
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/users" className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Usuarios Totales</h3>
          <p>{summaryData.totalUsers}</p>
        </Link>
        <Link to="/clients" className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Clientes Totales</h3>
          <p>{summaryData.totalClients}</p>
        </Link>
        <Link to="/orders" className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Pedidos Totales</h3>
          <p>{summaryData.totalOrders}</p>
        </Link>
        <Link to="/time-entries" className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Entradas de Tiempo Totales</h3>
          <p>{summaryData.totalTimeEntries}</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
