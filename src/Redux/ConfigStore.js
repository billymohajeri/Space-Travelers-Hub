import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
