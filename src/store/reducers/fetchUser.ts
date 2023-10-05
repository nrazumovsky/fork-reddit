import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (token: string | undefined) => {
    const response = await axios.get('https://oauth.reddit.com/api/me', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const name = response.data.data.name;
    const iconImg = response.data.data.icon_img;
    return { name, iconImg };
  },
);
