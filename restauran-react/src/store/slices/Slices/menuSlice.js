import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [
      { id: 1, name: 'Hamburguesa', price: 12.99, category: 'food' },
      { id: 2, name: 'Pizza', price: 15.99, category: 'food' },
      { id: 3, name: 'Ensalada César', price: 8.99, category: 'food' },
      { id: 4, name: 'Refresco', price: 2.99, category: 'drinks' },
      { id: 5, name: 'Cerveza', price: 4.99, category: 'drinks' },
      { id: 6, name: 'Agua Mineral', price: 1.99, category: 'drinks' },
      { id: 7, name: 'Tarta de Chocolate', price: 6.99, category: 'desserts' },
      { id: 8, name: 'Helado', price: 4.99, category: 'desserts' }
    ]
  },
  reducers: {}
});

export default menuSlice.reducer;