import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ICommentsPayload {
  subreddit: string;
  id: string;
}

export const fetchComments = createAsyncThunk(
  'comment/fetchComments',
  async ({ subreddit, id }: ICommentsPayload) => {
    const response = await axios.get(
      `http://api.reddit.com/r/${subreddit}/comments/${id}`,
    );

    const comments = response.data[1].data.children.map((item: any) => ({
      id: item.data.id,
      author: item.data.author,
      body: item.data.body,
    }));
    return comments;
  },
);
