import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
