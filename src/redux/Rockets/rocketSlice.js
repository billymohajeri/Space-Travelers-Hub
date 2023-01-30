import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default rocketSlice;
