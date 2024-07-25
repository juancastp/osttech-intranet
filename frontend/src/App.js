import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/control-horario" component={ControlHorario} />
        <PrivateRoute path="/gestion-pedidos" component={GestionPedidos} />
        <PrivateRoute path="/registro-clientes" component={RegistroClientes} />
        <PrivateRoute path="/roles-permisos" component={RolesPermisos} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
};

export default App;
