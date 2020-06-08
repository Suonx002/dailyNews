import React, { useContext, useEffect } from 'react';

import Searchbar from '../components/searchbar';
import TopHeadlines from '../components/topHeadlines';
import SearchResults from '../components/searchResults';

import { SearchContext } from '../context/searchContext';

const Homepage = (props) => {
  const searchContext = useContext(SearchContext);
  const { results, searchResults } = searchContext;

  useEffect(() => {
    if (props.match.params.searchQuery) {
      searchResults(props.match.params.searchQuery.toLowerCase());
      props.history.push(`/${props.match.params.searchQuery.toLowerCase()}`);
    }
    //eslint-disable-next-line
  }, []);
  return (
    <main>
      <Searchbar />
      {results !== null ? <SearchResults /> : <TopHeadlines />}
    </main>
  );
};

export default Homepage;
