import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const RolesPermisos = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axiosInstance.get('/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
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
      const response = await axiosInstance.post('/roles', formData);
      setRoles([...roles, response.data]);
      setFormData({ name: '' });
    } catch (error) {
      console.error('Error creating role:', error);
    }
  };

  const handleDelete = async (roleId) => {
    try {
      await axiosInstance.delete(`/roles/${roleId}`);
      setRoles(roles.filter(role => role.id !== roleId));
    } catch (error) {
      console.error('Error deleting role:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sistema de Roles y Permisos</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <div>
          <label>Nombre del Rol</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Guardar Rol</button>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Roles Existentes</h3>
        <ul className="bg-white p-4 shadow rounded">
          {roles.map(role => (
            <li key={role.id} className="border-b py-2 flex justify-between">
              {role.name}
              <button onClick={() => handleDelete(role.id)} className="bg-red-500 text-white p-1 rounded">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RolesPermisos;
