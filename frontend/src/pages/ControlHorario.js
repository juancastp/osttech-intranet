import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const ControlHorario = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');

  const handleFicharEntrada = async () => {
    try {
      const response = await axiosInstance.post('/time-entries', {
        start_time: new Date().toISOString(),
        location: 'Your location' // Puedes reemplazar esto con una ubicación real
      });
      setStartTime(response.data.start_time);
    } catch (error) {
      console.error('Error fichando entrada:', error);
    }
  };

  const handleFicharSalida = async () => {
    try {
      const response = await axiosInstance.put(`/time-entries/${startTime}`, {
        end_time: new Date().toISOString()
      });
      setEndTime(response.data.end_time);
    } catch (error) {
      console.error('Error fichando salida:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Control Horario</h2>
      <button onClick={handleFicharEntrada}>Fichar Entrada</button>
      <button onClick={handleFicharSalida}>Fichar Salida</button>
    </div>
  );
};

export default ControlHorario;
