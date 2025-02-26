import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/slices/store';
import TableGrid from './components/Table/table-grid';
import OrderForm from './components/OrderForm/order-form';
import ActiveOrders from './components/ActiveOrders/active-orders';
import styles from './app.module.css';

function App() {
  const [activeTab, setActiveTab] = useState('tables');
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableId) => {
    setSelectedTable(tableId);
    setActiveTab('new-order');
  };

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sistema de Gestión de Pedidos</h1>
        
        <nav className={styles.navigation}>
          <button 
            className={`${styles.navButton} ${activeTab === 'tables' ? styles.active : ''}`}
            onClick={() => setActiveTab('tables')}
          >
            Mesas
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'new-order' ? styles.active : ''}`}
            onClick={() => setActiveTab('new-order')}
          >
            Nuevo Pedido
          </button>
          <button 
            className={`${styles.navButton} ${activeTab === 'active-orders' ? styles.active : ''}`}
            onClick={() => setActiveTab('active-orders')}
          >
            Pedidos Activos
          </button>
        </nav>

        <main className={styles.mainContent}>
          {activeTab === 'tables' && <TableGrid onTableSelect={handleTableSelect} />}
          {activeTab === 'new-order' && <OrderForm tableId={selectedTable} />}
          {activeTab === 'active-orders' && <ActiveOrders />}
        </main>
      </div>
    </Provider>
  );
}

export default App;