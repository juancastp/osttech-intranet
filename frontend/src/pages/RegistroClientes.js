import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const RegistroClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dni: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axiosInstance.get('/clients');
        setClientes(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClientes();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/clients', formData);
      const response = await axiosInstance.get('/clients');
      setClientes(response.data);
      setFormData({
        name: '',
        surname: '',
        dni: '',
        phone: '',
        email: '',
      });
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registro de Clientes</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <div>
          <label>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>DNI</label>
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Correo Electrónico (opcional)</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Registrar Cliente</button>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Lista de Clientes</h3>
        <ul className="bg-white p-4 shadow rounded">
          {clientes.map((cliente) => (
            <li key={cliente.id} className="border-b py-2">
              {cliente.name} {cliente.surname} - {cliente.dni}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegistroClientes;
