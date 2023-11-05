import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCarsAdvertsThunk,
  fetchFilterCarsAdvertsThunk,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  dataCarsAdverts: [],
  page: 1,
  filter: '',
  favorites: [],
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
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload.id
      );
    },
    updateFavoritesFromStorage: (state, action) => {
      state.favorites = action.payload;
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
      })
      .addCase(fetchFilterCarsAdvertsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilterCarsAdvertsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataCarsAdverts = action.payload;
      })
      .addCase(fetchFilterCarsAdvertsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {
  fromFilter,
  pagePaginations,
  addToFavorites,
  removeFromFavorites,
  updateFavoritesFromStorage,
} = carsAdvertsSlise.actions;
export const carsAdvertsReduser = carsAdvertsSlise.reducer;
