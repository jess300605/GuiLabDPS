import { createSlice } from '@reduxjs/toolkit';

const tablesSlice = createSlice({
  name: 'tables',
  initialState: {
    tables: [
      { id: 1, number: 'Mesa 1', status: 'available' },
      { id: 2, number: 'Mesa 2', status: 'available' },
      { id: 3, number: 'Mesa 3', status: 'available' },
      { id: 4, number: 'Mesa 4', status: 'available' },
    ]
  },
  reducers: {
    updateTableStatus: (state, action) => {
      const { tableId, status } = action.payload;
      const table = state.tables.find(t => t.id === tableId);
      if (table) {
        table.status = status;
      }
    }
  }
});

export const { updateTableStatus } = tablesSlice.actions;
export default tablesSlice.reducer;