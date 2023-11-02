import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsAdvertsThunk } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  dataCarsAdverts: [],
  page: 1,
  filter: '',
};

const carsAdvertsSlise = createSlice({
  name: 'carsAdverts',
  initialState,
  reducers: {
    pagePaginations: state => {
      state.page = state.page += 1;
    },
    fromFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCarsAdvertsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataCarsAdverts = action.payload;
      })
      .addCase(fetchCarsAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { fromFilter } = carsAdvertsSlise.actions;
export const {pagePaginations} = carsAdvertsSlise.actions;
export const carsAdvertsReduser = carsAdvertsSlise.reducer;
