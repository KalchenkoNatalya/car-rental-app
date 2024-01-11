import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://654383a901b5e279de208230.mockapi.io/api';
const limit = 12;

export const fetchAllCarsThunkLimit = createAsyncThunk(
  'Advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const page = state.carsAdvertsState.page;

      const respons = await axios.get(
        `${baseURL}/Advert?page=${page}&limit=${limit}`
      );
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilterCarsAdvertsThunk = createAsyncThunk(
  'Advert/fetchFilter',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const makeBrand = state.carsAdvertsState.makeBrand;

      const respons = await axios.get(`${baseURL}/Advert?make=${makeBrand}`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAllCarsThunkWithoutLimit = createAsyncThunk(
  'Advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const page = state.carsAdvertsState.page;

      const respons = await axios.get(
        `${baseURL}/Advert?page=${page}`
      );
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchFilterCarsAdvertsThunk = createAsyncThunk(
//   'Advert/fetchFilter',
//   async (_, thunkAPI) => {
//     try {
//       const state = thunkAPI.getState();
//        const makeBrand = state.carsAdvertsState.makeBrand;
//       const priceTo = state.carsAdvertsState.priceTo;
//       const priceFrom = state.carsAdvertsState.priceFrom;

//       const respons = await axios.get(
//         `${baseURL}/Advert?make=${makeBrand}`
//       );
//       const allAdverts = respons.data;
//       console.log(makeBrand);
//       console.log(priceTo);
//       console.log(priceFrom);
//       // Фільтруємо оголошення за ціною після отримання всіх записів
//       const filterPrice = allAdverts.filter(oneCar => {
//         // Перетворюємо рядкове значення ціни у числове, видаливши символи, крім цифр
//         const carPrice = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
//         // Порівнюємо числові значення ціни
//         return carPrice >= parseInt(priceFrom.replace(/\D/g, ''), 10);
//         // return carPrice >= priceFrom && carPrice <= priceTo;
//       });
// console.log(filterPrice);
//       return filterPrice;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
