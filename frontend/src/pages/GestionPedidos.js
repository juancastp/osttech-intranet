import React from 'react';

const GestionPedidos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Pedidos</h2>
      <form className="bg-white p-4 shadow rounded">
        <div>
          <label>Cliente</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Descripción del artículo</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>URL del artículo</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label>Cantidad</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div>
          <label>Precio</label>
          <input type="number" className="border p-2 w-full" />
        </div>
        <div>
          <label>Fecha del pedido del cliente</label>
          <input type="date" className="border p-2 w-full" />
        </div>
        <div>
          <label>Estado del pedido</label>
          <select className="border p-2 w-full">
            <option>Pendiente de pedir</option>
            <option>Pedido a proveedor</option>
            <option>Recibido y avisado</option>
            <option>Entregado</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-4">Guardar Pedido</button>
      </form>
    </div>
  );
};

export default GestionPedidos;
