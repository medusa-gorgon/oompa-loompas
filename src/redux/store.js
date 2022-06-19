import homeReducer from './homeSlice';
import profileReducer from './profileSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    homePage: homeReducer,
    profile: profileReducer,
  },
});
export default store;
