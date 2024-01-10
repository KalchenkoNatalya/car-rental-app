import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk, fetchFilterCarsAdvertsThunk } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  dataCarsAdverts: [],
  page: 1,
  onFilter: false,
  makeBrand: '',
  favorites: [],
  priceFrom: '',
  priceTo: '',
  mileageFrom: '',
  mileageTo: '',
};

const carsAdvertsSlise = createSlice({
  name: 'carsAdverts',
  initialState,
  reducers: {
    pagePaginations: state => {
      state.page = state.page += 1;
    },
    fromFilter: (state, action) => {
      console.log(action);
      state.makeBrand = action.payload.selectedBrand;
      state.priceFrom = action.payload.selectedPriceFrom;
      state.priceTo = action.payload.selectedPriceTo;
      state.mileageFrom = action.payload.selectedMileageFrom;
      state.mileageTo = action.payload.selectedMileageTo;
      state.onFilter = true;
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
    updatePageToFirst: state => {
      state.page = 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataCarsAdverts = action.payload;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilterCarsAdvertsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilterCarsAdvertsThunk.fulfilled, (state, action) => {
        console.log(action);
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
  updatePageToFirst,
} = carsAdvertsSlise.actions;
export const carsAdvertsReduser = carsAdvertsSlise.reducer;
