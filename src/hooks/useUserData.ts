import { useEffect } from 'react';
import { fetchAccessToken } from '../store/reducers/fetchToken';
import { fetchUser } from '../store/reducers/fetchUser';
import { useAppDispatch, useAppSelector } from './redux';
export function useUserData() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.setTokenReducer.accessToken);
  const user = useAppSelector((state) => state.setUserReducer.user);

  useEffect(() => {
    const url = new URL(document.location.href);
    const tokenUrl = url.searchParams.get('code');

    if (!tokenUrl) {
      return;
    }

    if (tokenUrl && !token) {
      dispatch(fetchAccessToken(tokenUrl));
    }

    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token]);

  return [user];
}
