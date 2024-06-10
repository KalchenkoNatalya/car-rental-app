import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunkLimit } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  dataCarsAdverts: [],
  page: 1,
  onFilter: false,
  makeBrand: '',
  favorites: [],
  price: '',

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
      state.makeBrand = action.payload.selectedBrand;
      state.price = action.payload.selectedPrice;
      state.mileageFrom = action.payload.selectedMileageFrom;
      state.mileageTo = action.payload.selectedMileageTo;
      if (
        (state.makeBrand !== '' && state.makeBrand !== 'Select brand') ||
        (state.price !== '' && state.price !== 'NaN') ||
        state.mileageFrom !== '' ||
        state.mileageTo !== ''
      ) {
        state.onFilter = true;
      } else {
        state.onFilter = false;
      }
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
      .addCase(fetchAllCarsThunkLimit.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsThunkLimit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dataCarsAdverts = action.payload;
      })
      .addCase(fetchAllCarsThunkLimit.rejected, (state, action) => {
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
