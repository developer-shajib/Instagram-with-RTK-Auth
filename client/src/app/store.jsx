import { configureStore } from '@reduxjs/toolkit';
import instagramReducer from '../features/Instagram/InstaSlice.jsx';

// Create Store
export const store = configureStore({
  reducer: {
    instagram: instagramReducer,
  },
});
