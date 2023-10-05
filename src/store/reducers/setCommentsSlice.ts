import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IComment from '../../models/IComment';
import { fetchComments } from './fetchComments';

interface commentsState {
  comments: IComment[];
  isLoading: string;
  error: string | undefined;
}

const initialState: commentsState = {
  comments: [],
  isLoading: 'idle',
  error: '',
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = 'loading';
      state.error = '';
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
        state.isLoading = 'idle';
      },
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;
