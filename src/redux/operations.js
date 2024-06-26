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

export const fetchAllCarsThunkWithoutLimit = createAsyncThunk(
  'Advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      const page = state.carsAdvertsState.page;

      const respons = await axios.get(`${baseURL}/Advert?page=${page}`);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
