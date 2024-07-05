import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ControlHorario from './pages/ControlHorario';
import GestionPedidos from './pages/GestionPedidos';
import RegistroClientes from './pages/RegistroClientes';
import RolesPermisos from './pages/RolesPermisos';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/control-horario" element={<ControlHorario />} />
          <Route path="/gestion-pedidos" element={<GestionPedidos />} />
          <Route path="/registro-clientes" element={<RegistroClientes />} />
          <Route path="/roles-permisos" element={<RolesPermisos />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
