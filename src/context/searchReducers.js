import { SEARCH_RESULTS } from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};
