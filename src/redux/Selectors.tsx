// src/redux/selectors.ts
import { RootState } from './store';

export const selectCartProducts = (state: RootState) => state.cart.products;
