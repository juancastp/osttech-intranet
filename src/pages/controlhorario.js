import React from 'react';

const ControlHorario = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Control Horario Laboral</h2>
      <button className="bg-green-500 text-white p-2 rounded">Fichar Entrada</button>
      <button className="bg-red-500 text-white p-2 rounded ml-4">Fichar Salida</button>
    </div>
  );
};

export default ControlHorario;
