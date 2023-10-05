import { useEffect } from 'react';
import { fetchPosts } from '../store/reducers/fetchPosts';
import { useAppDispatch, useAppSelector } from './redux';

export function usePostsData() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.setTokenReducer.accessToken);
  const posts = useAppSelector((state) => state.setPostsSlice.posts);
  const comments = useAppSelector((state) => state.setCommentReducer.comments);
  useEffect(() => {
    const url = new URL(document.location.href);
    const tokenUrl = url.searchParams.get('code');

    if (tokenUrl) {
      dispatch(fetchPosts(token));
    }
  }, [posts]);

  return posts;
}
