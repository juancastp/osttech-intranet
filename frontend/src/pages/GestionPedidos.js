import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const GestionPedidos = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    client_id: '',
    description: '',
    url: '',
    quantity: '',
    price: '',
    order_date: '',
    status: '',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
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
      await axiosInstance.post('/orders', formData);
      const response = await axiosInstance.get('/orders');
      setOrders(response.data);
      setFormData({
        client_id: '',
        description: '',
        url: '',
        quantity: '',
        price: '',
        order_date: '',
        status: '',
      });
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Pedidos</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <div>
          <label>Cliente</label>
          <input type="text" name="client_id" value={formData.client_id} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Descripción del artículo</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>URL del artículo</label>
          <input type="text" name="url" value={formData.url} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Cantidad</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Precio</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Fecha del pedido del cliente</label>
          <input type="date" name="order_date" value={formData.order_date} onChange={handleChange} className="border p-2 w-full" />
        </div>
        <div>
          <label>Estado del pedido</label>
          <select name="status" value={formData.status} onChange={handleChange} className="border p-2 w-full">
            <option value="">Seleccionar Estado</option>
            <option value="Pendiente de pedir">Pendiente de pedir</option>
            <option value="Pedido a proveedor">Pedido a proveedor</option>
            <option value="Recibido y avisado">Recibido y avisado</option>
            <option value="Entregado">Entregado</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Guardar Pedido</button>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Lista de Pedidos</h3>
        <ul className="bg-white p-4 shadow rounded">
          {orders.map((order) => (
            <li key={order.id} className="border-b py-2">
              {order.description} - {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GestionPedidos;
