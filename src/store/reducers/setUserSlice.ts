import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IUser from '../../models/IUser';
import { fetchUser } from './fetchUser';

interface userState {
  user: IUser;
  isLoading: string;
  error: string | undefined;
}

const initialState: userState = {
  user: {
    name: '',
    iconImg: '',
  },
  isLoading: 'idle',
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = 'loading';
      state.error = '';
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isLoading = 'idle';
      },
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
