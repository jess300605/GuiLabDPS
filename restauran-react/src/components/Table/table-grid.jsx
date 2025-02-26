import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTableStatus } from '../../store/slices/Slices/tablesSlice';
import styles from './Table.module.css';

function TableGrid({ onTableSelect }) {
  const tables = useSelector(state => state.tables.tables);
  const dispatch = useDispatch();

  const handleTableClick = (table) => {
    if (table.status === 'available') {
      dispatch(updateTableStatus({ tableId: table.id, status: 'occupied' }));
      onTableSelect(table.id);
    }
  };

  return (
    <div className={styles.grid}>
      {tables.map(table => (
        <div 
          key={table.id} 
          className={`${styles.table} ${table.status === 'occupied' ? styles.occupied : ''}`}
          onClick={() => handleTableClick(table)}
        >
          <h3 className={styles.tableNumber}>{table.number}</h3>
          <p className={styles.status}>{table.status}</p>
          <button 
            className={`${styles.button} ${
              table.status === 'available' ? styles.buttonAvailable : styles.buttonOccupied
            }`}
          >
            {table.status === 'available' ? 'Seleccionar' : 'Ocupada'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TableGrid;