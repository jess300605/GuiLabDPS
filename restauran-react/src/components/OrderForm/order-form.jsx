import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../store/slices/Slices/orderSlice';
import styles from './OrderForm.module.css';

function OrderForm({ tableId }) {
  const [orderItems, setOrderItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menu.items);
  const table = useSelector(state => 
    state.tables.tables.find(t => t.id === tableId)
  );

  const handleAddItem = () => {
    if (selectedProduct && quantity > 0) {
      const menuItem = menuItems.find(item => item.id === parseInt(selectedProduct));
      if (menuItem) {
        setOrderItems([
          ...orderItems,
          {
            menuItemId: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: parseInt(quantity)
          }
        ]);
        setSelectedProduct('');
        setQuantity(1);
      }
    }
  };

  const handleConfirmOrder = () => {
    if (orderItems.length > 0 && tableId) {
      dispatch(addOrder({
        tableId,
        items: orderItems
      }));
      setOrderItems([]);
    }
  };

  if (!tableId) {
    return (
      <div className={styles.noTable}>
        <p>Por favor, seleccione una mesa primero</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <h2>Nuevo Pedido - {table?.number}</h2>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Producto:
          <select 
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className={styles.select}
          >
            <option value="">Seleccionar producto</option>
            {menuItems.map(item => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Cantidad:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>

      <button 
        onClick={handleAddItem}
        className={styles.addButton}
        disabled={!selectedProduct}
      >
        Agregar al Pedido
      </button>

      {orderItems.length > 0 && (
        <div className={styles.orderSummary}>
          <h3>Resumen del Pedido</h3>
          <ul className={styles.itemList}>
            {orderItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <span>Total:</span>
            <span>
              ${orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </span>
          </div>
          <button 
            onClick={handleConfirmOrder}
            className={styles.confirmButton}
          >
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderForm;