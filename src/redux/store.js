import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
import reducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: reducer,
  },
});

export default store;
