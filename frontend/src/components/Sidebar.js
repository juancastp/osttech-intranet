import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Osttech Intranet</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="text-white">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/control-horario" className="text-white">Control Horario</Link>
        </li>
        <li className="mb-2">
          <Link to="/gestion-pedidos" className="text-white">Gestión de Pedidos</Link>
        </li>
        <li className="mb-2">
          <Link to="/registro-clientes" className="text-white">Registro de Clientes</Link>
        </li>
        <li className="mb-2">
          <Link to="/roles-permisos" className="text-white">Roles y Permisos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
