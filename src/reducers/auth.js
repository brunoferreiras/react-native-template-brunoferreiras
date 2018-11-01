import * as types from '../actions/types';

const initialState = {
  user: {
    email: '',
    password: ''
  },
  loading: false,
  error: false,
  message: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, user: action.payload, error: false, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: false, loading: false };
    case types.LOGIN_ERROR:
      return {
        ...state,
        user: { email: '', password: '' },
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
