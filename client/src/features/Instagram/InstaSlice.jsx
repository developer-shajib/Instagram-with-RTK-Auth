import { createSlice } from '@reduxjs/toolkit';
import { LoginFormAction, TokenUserAction, logoutAction, register } from './InstaApi.jsx';

// initial State
const initialState = {
  users: [],
  logUser: [],
  loading: false,
  message: null,
  error: null,
  isSuccess: false,
};

// Create Slice
export const InstagramSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.error = null;
      state.message = '';
    },
  },

  // Api Request
  extraReducers: (builder) => {
    builder

      //Login Form Action
      .addCase(LoginFormAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginFormAction.fulfilled, (state, action) => {
        state.loading = false;
        state.logUser = [action.payload.data.user];
        state.message = 'Login Success';
        state.isSuccess = true;
      })
      .addCase(LoginFormAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Token Request
      .addCase(TokenUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(TokenUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.logUser = [action.payload.data];
        state.message = null;
        state.isSuccess = true;
      })
      .addCase(TokenUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Register Action
      .addCase(register.pending, (state) => {
        //  state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.loading = false;
        // state.logUser = [action.payload.data];
        // state.message = null;
        // state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload.message;
      })

      // Logout Action
      .addCase(logoutAction.fulfilled, (state) => {
        state.loading = false;
        state.logUser = [];
        state.message = '';
        state.isSuccess = false;
        state.error = null;
      });
  },
});

export const { reset } = InstagramSlice.actions;

export const getAllInstaData = (state) => state.instagram;

export default InstagramSlice.reducer;
