import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/control-horario" component={ControlHorario} />
          <Route path="/gestion-pedidos" component={GestionPedidos} />
          <Route path="/registro-clientes" component={RegistroClientes} />
          <Route path="/roles-permisos" component={RolesPermisos} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
