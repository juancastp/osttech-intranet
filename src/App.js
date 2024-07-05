import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/dashboard';
import ControlHorario from './pages/controlhorario';
import GestionPedidos from './pages/gestionpedidos';
import RegistroClientes from './pages/registroclientes';
import RolesPermisos from './pages/rolespermisos';

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
