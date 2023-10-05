import { ActionCreator, AnyAction, Reducer } from 'redux';

export interface RootState {
  commentText: string;
  token: string;
}

const initialState: RootState = {
  commentText: '',
  token: '',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token,
});

const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateToken: ActionCreator<AnyAction> = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const rootReducer: Reducer<RootState> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: window.__token__,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
