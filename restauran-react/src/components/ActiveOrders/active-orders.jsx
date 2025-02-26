import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrderStatus } from '../../store/slices/Slices/orderSlice';
import styles from './ActiveOrders.module.css';

function ActiveOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders);
  const tables = useSelector(state => state.tables.tables);

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ orderId, status: newStatus }));
  };

  if (orders.length === 0) {
    return (
      <div className={styles.noOrders}>
        <p>No hay pedidos activos</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {orders.map(order => {
        const table = tables.find(t => t.id === order.tableId);
        return (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <h3>{table?.number}</h3>
              <span className={`${styles.status} ${styles[order.status]}`}>
                {order.status}
              </span>
            </div>

            <div className={styles.orderItems}>
              {order.items.map((item, index) => (
                <div key={index} className={styles.item}>
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className={styles.total}>
              <span>Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>

            <div className={styles.actions}>
              <button
                className={`${styles.statusButton} ${order.status === 'pending' ? styles.active : ''}`}
                onClick={() => handleStatusChange(order.id, 'pending')}
              >
                Pendiente
              </button>
              <button
                className={`${styles.statusButton} ${order.status === 'preparing' ? styles.active : ''}`}
                onClick={() => handleStatusChange(order.id, 'preparing')}
              >
                Preparando
              </button>
              <button
                className={`${styles.statusButton} ${order.status === 'served' ? styles.active : ''}`}
                onClick={() => handleStatusChange(order.id, 'served')}
              >
                Servido
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActiveOrders;