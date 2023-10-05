import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const clientId = process.env.CLIENT_ID || '';

export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async (code: string | null) => {
    const response = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: clientId,
          password: 'ktsDZyzQc76ij8ljYALKGxo2HYXvIg',
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );
    return response.data.access_token;
  },
);
