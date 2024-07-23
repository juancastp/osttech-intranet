import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const ControlHorario = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [location, setLocation] = useState('');

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
    try {
      const response = await axiosInstance.post('/time-entries', {
        user_id: 1,
        start_time: new Date().toISOString(),
        location: location || 'default location', // Ensure location is not empty
      });
      setTimeEntries([...timeEntries, response.data]);
    } catch (error) {
      console.error('Error starting time entry:', error);
    }
  };

  const handleEnd = async (id) => {
    try {
      await axiosInstance.put(`/time-entries/${id}`, {
        end_time: new Date().toISOString(),
      });
      const updatedEntries = timeEntries.map(entry => 
        entry.id === id ? { ...entry, end_time: new Date().toISOString() } : entry
      );
      setTimeEntries(updatedEntries);
    } catch (error) {
      console.error('Error ending time entry:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Control Horario Laboral</h2>
      <button onClick={handleStart} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Fichar Entrada</button>
      <ul>
        {timeEntries.map(entry => (
          <li key={entry.id}>
            Inicio: {entry.start_time}, Fin: {entry.end_time || 'En curso'}, Ubicación: {entry.location}
            {!entry.end_time && (
              <button onClick={() => handleEnd(entry.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-4">Fichar Salida</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControlHorario;
