import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
