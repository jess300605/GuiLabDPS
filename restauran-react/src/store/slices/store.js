import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './Slices/tablesSlice';
import menuReducer from './Slices/menuSlice';
import ordersReducer from './Slices/orderSlice';

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    menu: menuReducer,
    orders: ordersReducer
  }
});