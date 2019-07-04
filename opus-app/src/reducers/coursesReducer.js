import * as types from '../Constants/actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${types.LOAD_COURSES}_${types.REQUEST}`:
      return { ...state, loading: true };

    case `${types.LOAD_COURSES}_${types.SUCCESS}`:
      return { ...state, loading: false, data: payload };

    case `${types.LOAD_COURSES}_${types.FAILURE}`:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
