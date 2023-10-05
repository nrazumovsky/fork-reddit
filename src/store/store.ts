import { combineReducers, configureStore } from '@reduxjs/toolkit';
import setCommentReducer from './reducers/setCommentsSlice';
import setPostsSlice from './reducers/setPostsSlice';
import setTokenReducer from './reducers/setTokenSlice';
import setUserReducer from './reducers/setUserSlice';

const rootReducer = combineReducers({
  setTokenReducer,
  setUserReducer,
  setPostsSlice,
  setCommentReducer,
});

const setStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore['dispatch'];

export default setStore;
