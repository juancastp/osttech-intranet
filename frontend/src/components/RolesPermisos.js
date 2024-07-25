import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';

const RolesPermisos = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

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

  const handleAddRole = async () => {
    try {
      const response = await axiosInstance.post('/roles', { name: newRole });
      setRoles([...roles, response.data]);
      setNewRole('');
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Roles y Permisos</h2>
      <div>
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Nuevo Rol"
        />
        <button onClick={handleAddRole}>Añadir Rol</button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolesPermisos;
