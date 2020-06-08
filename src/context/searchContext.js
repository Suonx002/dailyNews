import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import searchReducer from './searchReducers';

import { SEARCH_RESULTS } from './types';

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const initialState = {
    results: null,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  // actions
  const searchResults = async (searchInput) => {
    try {
      const res = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: searchInput,
          language: 'en',
          pageSize: 100,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      dispatch({
        type: SEARCH_RESULTS,
        payload: res.data.articles,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        results: state.results,
        searchResults,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};
