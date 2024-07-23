import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [summaryData, setSummaryData] = useState({
    totalUsers: 0,
    totalClients: 0,
    totalOrders: 0,
    totalTimeEntries: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [usersRes, clientsRes, ordersRes, timeEntriesRes] = await Promise.all([
          axios.get('http://192.168.51.172:8000/api/users'),
          axios.get('http://192.168.51.172:8000/api/clients'),
          axios.get('http://192.168.51.172:8000/api/orders'),
          axios.get('http://192.168.51.172:8000/api/time-entries'),
        ]);
        setSummaryData({
          totalUsers: usersRes.data.length,
          totalClients: clientsRes.data.length,
          totalOrders: ordersRes.data.length,
          totalTimeEntries: timeEntriesRes.data.length,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching summary data:', error);
        setError('Error fetching summary data');
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Usuarios Totales</h3>
          <p>{summaryData.totalUsers}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Clientes Totales</h3>
          <p>{summaryData.totalClients}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Pedidos Totales</h3>
          <p>{summaryData.totalOrders}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-bold">Entradas de Tiempo Totales</h3>
          <p>{summaryData.totalTimeEntries}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
