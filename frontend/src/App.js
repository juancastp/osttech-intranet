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
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/control-horario" element={<PrivateRoute><ControlHorario /></PrivateRoute>} />
        <Route path="/gestion-pedidos" element={<PrivateRoute><GestionPedidos /></PrivateRoute>} />
        <Route path="/registro-clientes" element={<PrivateRoute><RegistroClientes /></PrivateRoute>} />
        <Route path="/roles-permisos" element={<PrivateRoute><RolesPermisos /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
