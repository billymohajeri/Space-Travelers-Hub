import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
};

export const getMissions = createAsyncThunk('getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const data = response.data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  if (!data) return [];

  return data;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state = initialState, action) => {
      const newState = { ...state, list: [...action.payload] };
      return newState;
    });
  },
});

export default missionSlice.reducer;
