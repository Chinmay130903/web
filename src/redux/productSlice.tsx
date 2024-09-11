// redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // Ensure this matches what you are trying to select
  searchTerm:'',
  filteredData:[]

};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload; // Correctly update the state
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

