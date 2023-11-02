import { configureStore } from '@reduxjs/toolkit';
import { carsAdvertsReduser } from './carsAdvertsSlice';

export const store = configureStore({
  reducer: {
    carsAdvertsState: carsAdvertsReduser,
  },
});
