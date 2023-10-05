import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessToken } from './fetchToken';

interface tokenState {
  accessToken: string;
  isLoading: string;
  error?: string;
}

const initialState: tokenState = {
  accessToken: '',
  isLoading: 'idle',
  error: '',
};

export const tokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccessToken.pending, (state) => {
      state.isLoading = 'loading';
      state.error = '';
    });
    builder.addCase(fetchAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
      state.isLoading = 'idle';
    });
    builder.addCase(fetchAccessToken.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default tokenSlice.reducer;
