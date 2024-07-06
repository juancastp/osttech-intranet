import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const ControlHorario = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const fetchTimeEntries = async () => {
      try {
        const response = await axiosInstance.get('/time-entries');
        setTimeEntries(response.data);
      } catch (error) {
        console.error('Error fetching time entries:', error);
      }
    };

    fetchTimeEntries();
  }, []);

  const handleStart = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const location = `Lat: ${latitude}, Long: ${longitude}`;
        setLocation(location);
        try {
          const response = await axiosInstance.post('/time-entries', {
            user_id: 1, // Reemplazar con el ID del usuario actual
            start_time: new Date().toISOString(),
            location,
          });
          setStartTime(response.data.start_time);
          setTimeEntries([...timeEntries, response.data]);
        } catch (error) {
          console.error('Error starting time entry:', error);
        }
      });
    } else {
      alert('Geolocalización no soportada por el navegador.');
    }
  };

  const handleEnd = async () => {
    try {
      const response = await axiosInstance.put(`/time-entries/${timeEntries[timeEntries.length - 1].id}`, {
        end_time: new Date().toISOString(),
      });
      setEndTime(response.data.end_time);
      setTimeEntries(timeEntries.map(entry => entry.id === response.data.id ? response.data : entry));
    } catch (error) {
      console.error('Error ending time entry:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Control Horario Laboral</h2>
      <button onClick={handleStart} className="bg-green-500 text-white p-2 rounded">Fichar Entrada</button>
      <button onClick={handleEnd} className="bg-red-500 text-white p-2 rounded ml-4">Fichar Salida</button>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Registros de Tiempo</h3>
        <ul className="bg-white p-4 shadow rounded">
          {timeEntries.map(entry => (
            <li key={entry.id} className="border-b py-2">
              Inicio: {entry.start_time}, Fin: {entry.end_time || 'En progreso'}, Ubicación: {entry.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ControlHorario;
