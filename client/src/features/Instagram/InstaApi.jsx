import { createAsyncThunk } from '@reduxjs/toolkit';
import { createToast } from '../../utility/createToast.jsx';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

// User Login Action
export const LoginFormAction = createAsyncThunk('instagram/LoginFormAction', async (input) => {
  // From Validation
  if (!input.email || !input.password) return createToast('All fields are required!');

  const response = await axios.post('http://localhost:5050/api/v1/auth/login', input, { withCredentials: true });

  return response;
});

// Fetch All User Data
export const TokenUserAction = createAsyncThunk('instagram/tokenUserAction', async (token) => {
  const response = await axios.get('http://localhost:5050/api/v1/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
});

// Logout
export const logoutAction = createAsyncThunk('instagram/logoutAction', async () => {
  const response = await axios.post('http://localhost:5050/api/v1/auth/logout', {}, { withCredentials: true });

  return response;
});

// Register Action
export const register = createAsyncThunk('instagram/registerAction', async (input) => {
  const response = await axios.post('http://localhost:5050/api/v1/auth/register', input);

  return response;
});
