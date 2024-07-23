import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const ControlHorario = () => {
  const [timeEntries, setTimeEntries] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleStart = async () => {
    try {
      const response = await axiosInstance.post('/time-entries', {
        user_id: 1,
        start_time: new Date().toISOString(),
      });
      setStartTime(response.data.start_time);
      fetchTimeEntries();
    } catch (error) {
      console.error('Error starting time entry:', error);
    }
  };

  const handleEnd = async () => {
    if (!startTime) return;

    try {
      await axiosInstance.put(`/time-entries/${startTime.id}`, {
        end_time: new Date().toISOString(),
      });
      setEndTime(new Date().toISOString());
      fetchTimeEntries();
    } catch (error) {
      console.error('Error ending time entry:', error);
    }
  };

  const fetchTimeEntries = async () => {
    try {
      const response = await axiosInstance.get('/time-entries');
      setTimeEntries(response.data);
    } catch (error) {
      console.error('Error fetching time entries:', error);
    }
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Control Horario Laboral</h2>
      <button onClick={handleStart} className="bg-green-500 text-white p-2 rounded">
        Fichar Entrada
      </button>
      <button onClick={handleEnd} className="bg-red-500 text-white p-2 rounded">
        Fichar Salida
      </button>
      <h3>Registros de Tiempo</h3>
      {timeEntries.map(entry => (
        <div key={entry.id}>
          Inicio: {entry.start_time}, Fin: {entry.end_time}, Ubicación: {entry.location}
        </div>
      ))}
    </div>
  );
};

export default ControlHorario;
