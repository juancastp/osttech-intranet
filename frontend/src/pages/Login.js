import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate en lugar de useHistory
import axiosInstance from '../api/axiosConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });
      console.log('Response:', response.data); // Para depuración
      // Guardar el usuario autenticado en el contexto o estado global si es necesario
      navigate('/dashboard'); // Redirigir al dashboard
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
