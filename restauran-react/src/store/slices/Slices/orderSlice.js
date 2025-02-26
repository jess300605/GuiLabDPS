import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    nextOrderId: 1
  },
  reducers: {
    addOrder: (state, action) => {
      const total = action.payload.items.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      );
      
      state.orders.push({
        id: state.nextOrderId,
        tableId: action.payload.tableId,
        items: action.payload.items,
        status: 'pending',
        total
      });
      
      state.nextOrderId += 1;
    },
    updateOrderStatus: (state, action) => {
      const order = state.orders.find(o => o.id === action.payload.orderId);
      if (order) {
        order.status = action.payload.status;
      }
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    }
  }
});

export const { addOrder, updateOrderStatus, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;