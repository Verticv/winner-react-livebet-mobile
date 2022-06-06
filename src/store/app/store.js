import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';

const store = configureStore({
  reducer: {
    cards: userReducer,
    devTools: true,
  },
});

export default store;