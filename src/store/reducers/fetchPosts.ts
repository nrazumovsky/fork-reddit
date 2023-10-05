import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'user/fetchPosts',
  async (token: string | undefined) => {
    const response = await axios.get(
      'https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );
    const posts = response.data.data.children.map((item: any) => ({
      id: item.data.id,
      subreddit: item.data.subreddit,
      title: item.data.title,
      author: item.data.author,
      rating: item.data.ups,
      avatar: item.data.sr_detail.snoovatar_img
        ? item.data.sr_detail.icon_img
        : 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
      previewImg: item.data.preview
        ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
        : 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      datePostUtc: item.data.created_utc * 1000,
    }));

    return posts;
  },
);
