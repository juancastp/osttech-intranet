import React from 'react';

const RegistroClientes = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Registro de Clientes</h2>
      <form className="bg-white p-4 shadow rounded">
        <div>
          <label>Nombre</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>DNI</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Correo Electrónico (opcional)</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-4">Registrar Cliente</button>
      </form>
    </div>
  );
};

export default RegistroClientes;
