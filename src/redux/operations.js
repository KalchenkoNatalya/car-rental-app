import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://654383a901b5e279de208230.mockapi.io/api';
const limit = 12;

export const fetchCarsAdvertsThunk = createAsyncThunk(
  'Advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      // console.log("state", state);
      const page = state.carsAdvertsState.page;
      // console.log("page:", page);
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
      // console.log("state", state);
      const filter = state.carsAdvertsState.filter;
      // const filter = useSelector(selectFilteredCarsAdverts)
      // console.log("page:", page);
      const respons = await axios.get(`${baseURL}/Advert?search=${filter}`);
      // const respons =  await axios.get(`${baseURL}/Advert?page=${page}&search=${filter}`)
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
