import React from 'react';

const RolesPermisos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sistema de Roles y Permisos</h2>
      <form className="bg-white p-4 shadow rounded">
        <div>
          <label>Nombre del Rol</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Permisos</label>
          <textarea className="border p-2 w-full" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-4">Guardar Rol</button>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Roles Existentes</h3>
        <ul className="bg-white p-4 shadow rounded">
          <li>Administrador</li>
          <li>Empleado</li>
          {/* Agregar lógica para listar roles dinámicamente */}
        </ul>
      </div>
    </div>
  );
};

export default RolesPermisos;
