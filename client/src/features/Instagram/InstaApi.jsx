import { createAsyncThunk } from '@reduxjs/toolkit';
import { createToast } from '../../utility/createToast.jsx';
import axios from 'axios';

// User Login Action
export const LoginFormAction = createAsyncThunk('Instagram/LoginFormAction', async (input) => {
  // From Validation
  if (!input.email || !input.password) createToast('All fields are required!');

  const response = await axios.post('http://localhost:5050/api/v1/auth/login', input);

  return response;
});
