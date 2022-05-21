import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './about';

const store = configureStore({
  reducer: {
    aboutReducer,
  },
});

export default store;
