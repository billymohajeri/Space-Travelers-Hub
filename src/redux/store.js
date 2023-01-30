import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/Rocket-Slice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
