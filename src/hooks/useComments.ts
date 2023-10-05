import { useEffect } from 'react';
import { fetchComments } from '../store/reducers/fetchComments';
import { useAppDispatch, useAppSelector } from './redux';
import { usePostsData } from './usePostsData';

export function useComments() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.setTokenReducer.accessToken);
  const [posts] = usePostsData();
  const comments = useAppSelector((state) => state.setCommentReducer.comments);

  useEffect(() => {
    if (!token || !posts) {
      return;
    }

    if (token || posts) {
      dispatch(fetchComments({ subreddit: posts.subreddit, id: posts.id }));
    }
  }, [token, posts]);

  return comments;
}
