import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ControlHorario from './pages/ControlHorario';
import GestionPedidos from './pages/GestionPedidos';
import RegistroClientes from './pages/RegistroClientes';
import RolesPermisos from './pages/RolesPermisos';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/control-horario" element={<ControlHorario />} />
        <PrivateRoute path="/gestion-pedidos" element={<GestionPedidos />} />
        <PrivateRoute path="/registro-clientes" element={<RegistroClientes />} />
        <PrivateRoute path="/roles-permisos" element={<RolesPermisos />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
