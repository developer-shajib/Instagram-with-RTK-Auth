// Create Slice

import { createSlice } from '@reduxjs/toolkit';
import { LoginFormAction } from './InstaApi.jsx';

const initialState = {
  users: [],
  logUser: [],
  loading: false,
  message: null,
  error: null,
};

export const InstagramSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginFormAction.pending, (state) => {
        state.loading = true;
      })
      .builder.addCase(LoginFormAction.fulfilled, (state, action) => {
        state.loading = false;
        state.logUser = action.payload.user;
        state.message = 'Login Success';
      })
      .builder.addCase(LoginFormAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const getAllInstaData = (state) => state.instagram;

export default InstagramSlice.reducer;
