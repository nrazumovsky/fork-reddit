import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IPost from '../../models/IPost';
import { fetchPosts } from './fetchPosts';

interface postsState {
  posts: IPost[];
  isLoading: string;
  error: string | undefined;
}

const initialState: postsState = {
  posts: [],
  isLoading: 'idle',
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = 'loading';
      state.error = '';
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
        state.isLoading = 'idle';
      },
    );
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
